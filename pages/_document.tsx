import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class Document extends NextDocument {
  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@700&family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            defer
            data-website-id="e62a8766-355f-4fa1-ad0f-f2adfed8cc6c"
            src="https://umame.one/umami.js"
          />
        </body>
      </Html>
    );
  }
}
