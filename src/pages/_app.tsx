import type { AppProps } from 'next/app';
import AppProvider from '~/providers/AppProvider';

const App = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
);

export default App;
