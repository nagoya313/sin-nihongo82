import { useUser } from '@auth0/nextjs-auth0';
import { Button, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import AdminMenu from '../molecules/AdminMenu.client';

const AuthButton = () => {
  const toast = useToast();
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (error != null) {
      toast({
        title: 'サインインに失敗しました。',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [toast, error]);

  return user != null ? (
    <AdminMenu user={user} />
  ) : (
    <Button as="a" href="/api/auth/login" disabled={isLoading}>
      Sign in
    </Button>
  );
};

export default AuthButton;
