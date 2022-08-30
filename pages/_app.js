import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloclient";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const apolloClient = useApollo(pageProps.initialApolloState);

  return getLayout(
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
