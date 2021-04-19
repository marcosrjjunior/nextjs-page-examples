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
            content="Simple demo created to show how a page behaves based on the selected type"
          />
          <meta name="keywords" content="Nextjs,SSR,SSG,Page types,marcosrjjunior,static rendering, server-side rendering,javascript" />
          <meta property="og:title" content="nextjs page examples" />
          <meta property="og:site_name" content="nextjs page examples" />
          <meta name="author" content="@marcosrjjunior" />
          <meta
            property="og:url"
            content="https://nextjs-page-examples.vercel.app/"
          />
          <meta
            property="og:description"
            content="Simple demo created to show how a page behaves based on the selected type"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://github.com/marcosrjjunior/nextjs-page-examples/blob/main/home.png"
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
