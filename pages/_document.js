import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import Script from 'next/script';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/icons/namec.svg"
          />
          <link rel="stylesheet" href="https://use.typekit.net/czl8qzd.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

          <link
            href="https://fonts.googleapis.com/css2?family=Playwrite+NG+Modern:wght@100..400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300..900&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300..900&family=Playwrite+NG+Modern:wght@100..400&display=swap"
            rel="stylesheet"
          ></link>
          <meta property="og:url" content="https://kofisfire.com/" />
          <meta property="og:title" content="Carly Hayer" />

          <meta
            property="og:description"
            content="Carly Hayter is a web developer and fine artist from San Diego, CA."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script>0</script>
      </Html>
    );
  }
}
