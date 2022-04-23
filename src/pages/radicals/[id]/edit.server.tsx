import PageInfo from '~/components/molecules/PageInfo.client';
import Page from '~/components/templates/Page.client';
import RadicalEditForm from '~/features/radical/components/RadicalEditForm.client';
import { radicalPathParams } from '~/features/radical/path';
import { radical } from '~/features/radical/query/radical.server';
import { authCheck } from '~/utils/auth';
import { pathParamsCheck } from '~/utils/path';

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

export const getServerSideProps = authCheck(async (context) =>
  pathParamsCheck(radicalPathParams, async (_, { id }) => {
    const data = await radical(id);
    return data != null ? { props: { radical: data } } : { notFound: true };
  })(context)
);
