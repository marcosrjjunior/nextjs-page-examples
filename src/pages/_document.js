import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Simple demo created to show how a page behaves based on the selected type. @marcosrjjunior"
          />
          <meta
            name="keywords"
            content="Nextjs,SSR,SSG,Page types,marcosrjjunior,static rendering, server-side rendering,javascript"
          />
          <meta property="og:title" content="Nextjs pages" />
          <meta property="og:site_name" content="Nextjs pages" />
          <meta name="author" content="@marcosrjjunior" />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/marcosrjjunior/nextjs-pages/main/home.png"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nextjs-pages.vercel.app/" />
          <meta property="og:title" content="Nextjs pages" />
          <meta
            property="og:description"
            content="Simple demo created to show how a page behaves based on the selected type. @marcosrjjunior"
          />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/marcosrjjunior/nextjs-pages/main/home.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://nextjs-pages.vercel.app/"
          />
          <meta property="twitter:title" content="Nextjs pages" />
          <meta
            property="twitter:description"
            content="Simple demo created to show how a page behaves based on the selected type. @marcosrjjunior"
          />
          <meta
            property="twitter:image"
            content="https://raw.githubusercontent.com/marcosrjjunior/nextjs-pages/main/home.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
