import {
  Avatar,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  LinkBox,
  LinkOverlay,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { MdLightMode, MdMenu, MdNightlight } from 'react-icons/md';
import { HEADER_HEIGHT } from '../../styles/constants';

type AppBarProps = {
  onSideBarOpen: () => void;
};

export const AppBar = ({ onSideBarOpen }: AppBarProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      zIndex={3}
      bg={useColorModeValue('white', 'gray.800')}
      h={HEADER_HEIGHT}
      align="center"
      justify="space-between"
      px={4}
      pos="fixed"
      width="full"
      shadow={useColorModeValue('md', undefined)}
      borderBottomWidth="1px"
    >
      <IconButton
        icon={<MdMenu />}
        onClick={onSideBarOpen}
        aria-label="open menu"
        color="gray.400"
        display={{ base: 'flex', md: 'none' }}
        variant="ghost"
      />
      <LinkBox>
        <NextLink href="/" passHref>
          <LinkOverlay>
            <HStack>
              <Avatar size="sm" src="/favicon.ico" display={{ base: 'none', md: 'block' }} />
              <Heading as="h4" size="md">
                新日本語
              </Heading>
            </HStack>
          </LinkOverlay>
        </NextLink>
      </LinkBox>
      <HStack p={4}>
        <IconButton
          onClick={toggleColorMode}
          aria-label="change color mode"
          variant="ghost"
          color="gray.400"
          fontSize={20}
          icon={colorMode === 'light' ? <MdNightlight /> : <MdLightMode />}
        />
        <Button>Sign in</Button>
      </HStack>
    </Flex>
  );
};
