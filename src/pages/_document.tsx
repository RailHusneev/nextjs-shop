import { Html, Head, Main, NextScript } from "next/document";
import { NextPage } from "next";

export const MyDocument: NextPage = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
