import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";
import SpinnerComponent from "../components/Loading";
import { LoadingProvider } from "../context/loading";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <LoadingProvider>
        <SpinnerComponent/>
        <Component {...pageProps} />
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default MyApp;
