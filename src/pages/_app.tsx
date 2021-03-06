import Head from 'next/head';
import GlobalStyle, { fontFaceRules } from '../components/GlobalStyle.css';

import img_favicon from '../assets/img/favicon.svg';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href={img_favicon} />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}