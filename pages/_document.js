import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content="Frontend, Frontend developer, Santiago del Río, React, Next.js"
        />
        <meta name="description" content="Hi, I am Santiago. I'm a Frontend Developer from Argentina. Passionate about coding and technology. Always looking to learn new things and grow as a developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://santiagodelrio.vercel.app" />
        <meta
          property="og:title"
          content="Santiago del Río - Frontend developer"
        />
        <meta property="og:image" content="https://imgur.com/a/pdkQX41" />
        <meta
          property="og:description"
          content="Hi, I am Santiago. I'm a Frontend Developer from Argentina. Passionate about coding and technology. Always looking to learn new things and grow as a developer."
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:url" content="https://santiagodelrio.vercel.app" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Hi, I am Santiago. I'm a Frontend Developer from Argentina. Passionate about coding and technology. Always looking to learn new things and grow as a developer."
        />
        <meta name="twitter:image" content="https://imgur.com/a/pdkQX41" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
