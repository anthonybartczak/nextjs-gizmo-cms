import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Gizmo" />
        <meta
          name="keyword"
          content="event management, management, artist, artysta, , poland, łódź, eventy, event, lokale, kluby, imprezy, manager, menadzer"
        />
        <meta property="og:title" content="Agencja Gizmo Management" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="http://www.gizmo.com.pl/" />
        <meta property="og:type" content="website" />
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
