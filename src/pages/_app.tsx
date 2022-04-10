import type { AppProps } from 'next/app';
import Layout from '../components/organisms/Layout.client';

// LayoutでComponentを括らないとHydrate errorが起きて謎
const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
