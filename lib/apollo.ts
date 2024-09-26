import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  from,
} from "@apollo/client";
import fetch from "cross-fetch";
import { setContext } from "@apollo/client/link/context";

const isBrowser = typeof window !== "undefined";
let tokenCache = "";
let tokenExpiryCache = "";

const fetchHeaderWithToken = async (headers = {}) => {
  const response = await fetch("https://wp.gizmo.com.pl/graphql", {
    method: "POST",
    cache: "no-cache",
    // credentials: "include",
    headers: {
      ...headers,
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      operationName: "LoginUser",
      query: `mutation LoginUser { login(input: {clientMutationId: "${process.env.GIZMO_UID}", username: "${process.env.GIZMO_USERNAME}", password: "${process.env.GIZMO_PASSWORD}"}) { authToken user { jwtAuthExpiration } } } `,
    }),
  })
    .then((res) => res.json())
    .then((j) => {
      const {
        data: {
          login: {
            authToken,
            user: { jwtAuthExpiration },
          },
        },
      } = j;
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("tk", authToken);
        localStorage.setItem("ex", jwtAuthExpiration);
        //console.log("Storing ", authToken, jwtAuthExpiration);
      }
      tokenCache = authToken;
      tokenExpiryCache = jwtAuthExpiration;
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${authToken}`,
        },
      };
    });
  return response;
};

const customFetch = async (
  uri: RequestInfo | URL,
  options?: RequestInit // Make `options` optional
): Promise<Response> => {
  const ex =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("ex")
      : tokenExpiryCache;

  if (ex) {
    const expiration = Number(ex) * 1000;
    const now = Date.now();
    if (now > expiration) {
      const headerWithNewToken = await fetchHeaderWithToken();
      return fetch(uri, {
        ...options, // options could be undefined here
        credentials: "include",
        headers: {
          ...options?.headers, // Use `?.` to handle undefined options
          ...headerWithNewToken.headers,
        },
      });
    }
  }

  const initialRequest = fetch(uri, { ...options, credentials: "include" });
  return initialRequest
    .then((response) => response.json())
    .then(async (json) => {
      if (
        json &&
        json.errors &&
        json.errors.length > 0 &&
        json.errors[0].message === "Internal server error"
      ) {
        return fetch("https://wp.gizmo.com.pl/graphql", {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            operationName: "RefreshAuthToken",
            query: ` mutation RefreshAuthToken { refreshJwtAuthToken(input: { clientMutationId: "${
              process.env.ID
            }", jwtRefreshToken: "${
              typeof localStorage !== "undefined"
                ? localStorage.getItem("tk")
                : ""
            }"}) { authToken } }`,
          }),
        })
          .then((res) => res.json())
          .then(async (j) => {
            const {
              data: { authToken },
              errors = [],
            } = j;
            if (
              errors.length > 0 &&
              errors[0].message === "The provided refresh token is invalid"
            ) {
              const headerWithNewToken = await fetchHeaderWithToken();
              return fetch(uri, {
                ...options,
                headers: {
                  ...options?.headers, // Use `?.` to handle undefined options
                  ...headerWithNewToken.headers,
                },
              });
            }
            if (typeof localStorage !== "undefined")
              localStorage?.setItem("tk", authToken);
            const optionsWithRefreshedToken = {
              ...options,
              headers: {
                ...options?.headers, // Use `?.` to handle undefined options
                authorization: `Bearer ${authToken}`,
              },
            };
            return fetch(uri, optionsWithRefreshedToken);
          });
      }
      return fetch(uri, { ...options, credentials: "include" });
    });
};

export const httpLink = new HttpLink({
  fetch: customFetch, // Switches between unfetch & node-fetch for client & server.
  uri: "https://wp.gizmo.com.pl/graphql",
  credentials: "include",
});

const tokenGeneration = setContext(async () => {
  const token =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("tk")
      : tokenCache;
  if (!token) {
    return fetchHeaderWithToken().then((h) => ({
      token: h.headers.authorization,
    }));
  }
  return { token: `Bearer ${token}` };
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const { token } = operation.getContext();
  // add the authorization to the headers
  operation.setContext((opts: Record<string, any>) => {
    const { headers = {} } = opts;
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token,
      },
    };
  });

  return forward(operation);
});

const apolloClient = new ApolloClient({
  connectToDevTools: isBrowser,
  ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
  link: from([tokenGeneration, authMiddleware, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

export default apolloClient;
