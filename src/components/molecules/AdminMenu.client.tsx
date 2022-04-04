import { useUser } from '@auth0/nextjs-auth0';
import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import NextLink from 'next/link';

const AdminMenu = () => {
  const { user, isLoading } = useUser();

  return (
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
  );
};

export default AdminMenu;
