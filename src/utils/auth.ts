import { getSession, type Claims } from '@auth0/nextjs-auth0';
import { type GetServerSideProps } from 'next';

type AuthCheckGetServerSideProps<TProps> = (
  context: Parameters<GetServerSideProps<TProps>>[0],
  user?: Claims
) => ReturnType<GetServerSideProps<TProps>>;

export const authCheck =
  <TProps>(getServerSideProps: AuthCheckGetServerSideProps<TProps>): GetServerSideProps =>
  async (context) => {
    const session = getSession(context.req, context.res);
    if (session?.user != null) return getServerSideProps(context, session.user);
    return { notFound: true };
  };
