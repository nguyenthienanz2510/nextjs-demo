import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
