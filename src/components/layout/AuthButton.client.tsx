import { useUser } from '@auth0/nextjs-auth0';
import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import NextLink from 'next/link';

const AuthButton = () => {
  const { user, isLoading } = useUser();

  return user != null ? (
    <Menu>
      <MenuButton as={Button} rounded="full" variant="link" cursor="pointer">
        <Avatar name={user?.nickname ?? undefined} src={user?.picture ?? undefined} />
      </MenuButton>
      <MenuList>
        <NextLink href="/api/auth/logout" passHref>
          <MenuItem isDisabled={isLoading}>サインアウト</MenuItem>
        </NextLink>
      </MenuList>
    </Menu>
  ) : (
    <Button as="a" href="/api/auth/login" disabled={isLoading}>
      Sign in
    </Button>
  );
};

export default AuthButton;
