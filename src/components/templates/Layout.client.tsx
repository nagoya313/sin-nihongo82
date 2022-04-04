import { useUser } from '@auth0/nextjs-auth0';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { HEADER_HEIGHT } from '../../styles/constants';
import SideBar from '../molecules/SideBar.client';
import AppBar from '../organisms/AppBar.client';
import Footer from '../organisms/Footer.client';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const toast = useToast();
  const { error } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (error?.message != null) {
      toast({
        title: 'サインインに失敗しました。',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [toast, error?.message]);

  return (
    <>
      <AppBar onSideBarOpen={onOpen} />
      <Box h={HEADER_HEIGHT} />
      <VStack
        p={2}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        borderRightWidth="1px"
        display={{ base: 'none', md: 'block' }}
      >
        <SideBar onClose={onClose} />
      </VStack>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Avatar size="sm" src="/favicon.ico" mr={2} />
            新日本語
          </DrawerHeader>
          <DrawerBody>
            <SideBar onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex direction="column" ml={{ base: 0, md: 60 }} minH={`calc(100VH - ${HEADER_HEIGHT * 4}px)`}>
        <Box flex={1} p={8}>
          {children}
        </Box>
        <Divider />
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
