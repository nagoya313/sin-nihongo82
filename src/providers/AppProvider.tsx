import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider } from '@chakra-ui/react';
import { global } from '~/styles/global';
import { type PropsWithChildren } from '~/utils/types';

type ProvidersProps = PropsWithChildren;

const AppProvider = ({ children }: ProvidersProps) => (
  <UserProvider>
    <ChakraProvider theme={global}>{children}</ChakraProvider>
  </UserProvider>
);

export default AppProvider;
