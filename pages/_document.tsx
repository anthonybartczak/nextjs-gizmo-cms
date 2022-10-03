import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="keyword"
          content="event management, management, artist, artysta, , poland, łódź, eventy, event, lokale, kluby, imprezy, manager, menadzer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-100">
        <Main></Main>
        <NextScript />
      </body>
    </Html>
  );
}
