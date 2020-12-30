import Document, { Html, Head, Main, NextScript } from "next/document";

type Props = {};

export default class MyDocument extends Document<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shurtcut icon" href="/m.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
