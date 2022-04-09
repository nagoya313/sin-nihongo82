import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/templates/Layout.client';
import { global } from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <ChakraProvider theme={global}>
      <Head>
        <title>新日本語</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </UserProvider>
);

export default App;
