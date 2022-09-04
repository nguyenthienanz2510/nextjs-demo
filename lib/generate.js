import { gql } from "graphql-tag";

export const LOGIN_MUTATION = gql`
  mutation Test($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;
