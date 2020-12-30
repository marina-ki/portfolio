import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { Meta } from "../components/common/Meta";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
