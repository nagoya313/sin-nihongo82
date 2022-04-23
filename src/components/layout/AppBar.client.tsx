import { Avatar, Flex, Heading, HStack, IconButton, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { MdMenu } from 'react-icons/md';
import { HEADER_HEIGHT } from '~/styles/constants';
import AuthButton from './AuthButton.client';
import ColorChangeButton from './ColorChangeButton.client';

type AppBarProps = {
  onSideBarOpen: () => void;
};

const AppBar = ({ onSideBarOpen }: AppBarProps) => (
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
      onClick={onSideBarOpen}
      aria-label="open menu"
      icon={<MdMenu />}
      color="gray.400"
      display={{ base: 'flex', md: 'none' }}
      variant="ghost"
    />
    <LinkBox as="article">
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
      <ColorChangeButton />
      <AuthButton />
    </HStack>
  </Flex>
);

export default AppBar;
