import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default apolloClient;
