import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { Meta } from "../components/common/Meta";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta
        title="Portfolio"
        description="Marina | Mobile Engineer."
        image="/marinya.png"
      >
        <link rel="shurtcut icon" href="/m.ico" />
      </Meta>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
