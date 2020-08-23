import { AppProps } from "next/app";
import "../components/styles/layout.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
