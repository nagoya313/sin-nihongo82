import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components/templates/Layout';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>新日本語</title>
    </Head>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </>
);

export default App;
