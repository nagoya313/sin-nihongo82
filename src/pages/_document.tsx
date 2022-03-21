import { ColorModeScript } from '@chakra-ui/react';
import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="ja">
    <Head>
      <meta name="description" content="あたらしいにほんごのかたち" />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
    </Head>
    <body>
      <ColorModeScript />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
