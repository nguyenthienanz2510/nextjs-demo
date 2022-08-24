import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  console.log(pageProps);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
