import { gql } from "@apollo/client";

export const GetBearerToken = gql`
  mutation GetBearerToken($username: String, $password: String) {
    login(
      input: {
        clientMutationId: "uniqueId"
        username: $username
        password: $password
      }
    ) {
      authToken
      user {
        id
        name
      }
    }
  }
`;
