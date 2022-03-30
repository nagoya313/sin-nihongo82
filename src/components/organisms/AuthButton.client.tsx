import { useUser } from '@auth0/nextjs-auth0';

const AuthButton = () => {
  const { user, error, isLoading } = useUser();

  /*useEffect(() => {
    if (error != null) {
      toast({
        title: 'サインインに失敗しました。',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }, [toast, error]);*/

  return user != null ? (
    <div className="avatar">
      <div className="w-12">
        <img src={user.picture ?? undefined} />
      </div>
    </div>
  ) : (
    <a href="/api/auth/login" className="btn btn-ghost btn-sm" disabled={true}>
      Sign in
    </a>
  );
};

export default AuthButton;
