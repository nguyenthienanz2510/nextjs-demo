import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  //   uri: "https://countries.trevorblades.com",
  uri: "http://18.136.209.168/graphql",
  cache: new InMemoryCache(),
});

export default client;
