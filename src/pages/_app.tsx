import type { AppProps } from 'next/app';
import Layout from '../components/organisms/Layout.client';

// Layoutで括らないとHydrate errorが出る模樣
const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
