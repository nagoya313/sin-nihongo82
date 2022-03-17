import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>新日本語</title>
    </Head>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default App;
