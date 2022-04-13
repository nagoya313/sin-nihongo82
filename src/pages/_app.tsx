import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { global } from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <ChakraProvider theme={global}>
      <Component {...pageProps} />
    </ChakraProvider>
  </UserProvider>
);

export default App;
