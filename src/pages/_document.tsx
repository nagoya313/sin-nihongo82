import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="ja">
    <Head>
      <meta name="description" content="あたらしいにほんごのかたち" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
