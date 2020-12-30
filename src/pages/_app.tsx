import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shurtcut icon" href="/m.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
