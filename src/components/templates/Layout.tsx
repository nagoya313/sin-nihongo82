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
  VStack,
} from '@chakra-ui/react';
import { HEADER_HEIGHT } from '../../styles/constants';
import { SideBar } from '../molecules/SideBar';
import { AppBar } from '../organisms/AppBar';
import { Footer } from '../organisms/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Divider orientation="vertical" />
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
          <DrawerHeader shadow="md">
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
