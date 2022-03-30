import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/templates/Layout.client';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>新日本語</title>
    </Head>
    <ThemeProvider attribute="data-theme">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
);

export default App;
