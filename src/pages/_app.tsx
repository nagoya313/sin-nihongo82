import type { AppProps } from 'next/app';
import Providers from '../components/templates/Providers.client';

const App = ({ Component, pageProps }: AppProps) => (
  <Providers>
    <Component {...pageProps} />
  </Providers>
);

export default App;
