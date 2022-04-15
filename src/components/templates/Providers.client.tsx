import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider } from '@chakra-ui/react';
import { global } from '../../styles/global';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => (
  <UserProvider>
    <ChakraProvider theme={global}>{children}</ChakraProvider>
  </UserProvider>
);

export default Providers;
