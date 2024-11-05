import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={"비즈서비스_줄서기 부스"} />
        <meta property="og:title" content="줄서기 부스" />
        <meta property="og:site_name" content="줄서기 부스" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:description" content={"비즈서비스_줄서기 부스"} />
        <meta property="og:locale" content="ko" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
