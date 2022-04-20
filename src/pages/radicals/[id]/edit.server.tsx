import { getSession } from '@auth0/nextjs-auth0';
import { type GetServerSideProps } from 'next';
import { z } from 'zod';
import PageInfo from '../../../components/molecules/PageInfo.client';
import RadicalEditForm from '../../../components/molecules/RadicalEditForm.client';
import Page from '../../../components/templates/Page.client';
import { radical } from '../../../features/radical/radicalQuery.server';
import { smallInt } from '../../../libs/schema/postgres';
import { numberPreprocess } from '../../../libs/schema/preprocess';

type RadicalEditProps = {
  radical: NonNullable<Awaited<ReturnType<typeof radical>>>;
};

const RadicalEdit = ({ radical }: RadicalEditProps) => (
  <Page title={`部首編集「${radical.radical}」`}>
    <PageInfo avatar={radical.radical} title="部首編集" />
    <RadicalEditForm radical={radical} />
  </Page>
);

export default RadicalEdit;

export const getServerSideProps: GetServerSideProps<RadicalEditProps> = async (context) => {
  const session = getSession(context.req, context.res);
  if (session?.user != null) {
    const parsedId = z.object({ id: numberPreprocess(smallInt) }).safeParse(context.query);
    if (parsedId.success) {
      const data = await radical(parsedId.data.id);
      if (data != null)
        return {
          props: {
            radical: data,
          },
        };
    }
  }
  return { notFound: true };
};
