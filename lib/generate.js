import { gql } from "graphql-tag";

export const GET_DOGS = gql`
  mutation Test($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;
