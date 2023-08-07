import { AppProps } from 'next/app';

// TODO: move these global styles into tailwind config
import '../components/styles/layout.css';
import '../components/styles/globals.css';

/**
 * Root level component for all pages
 * @param {ReactComponentElement} Component Page component to be rendered
 * @param {object} pageProps All props for the page
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
