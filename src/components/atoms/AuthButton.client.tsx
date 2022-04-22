import { useUser } from '@auth0/nextjs-auth0';
import { Button } from '@chakra-ui/react';
import AdminMenu from '../molecules/AdminMenu.client';

const AuthButton = () => {
  const { user, isLoading } = useUser();

  return user != null ? (
    <AdminMenu />
  ) : (
    <Button as="a" href="/api/auth/login" disabled={isLoading}>
      Sign in
    </Button>
  );
};

export default AuthButton;
