import { type UserProfile } from '@auth0/nextjs-auth0';
import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import NextLink from 'next/link';

type Props = {
  user: UserProfile;
};

const AdminMenu = ({ user: { nickname, picture } }: Props) => (
  <Menu>
    <MenuButton as={Button} rounded="full" variant="link" cursor="pointer">
      <Avatar name={nickname ?? undefined} src={picture ?? undefined} />
    </MenuButton>
    <MenuList>
      <NextLink href="/api/auth/logout" passHref>
        <MenuItem>ログアウト</MenuItem>
      </NextLink>
    </MenuList>
  </Menu>
);

export default AdminMenu;
