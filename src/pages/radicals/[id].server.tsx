import { type GetServerSideProps } from 'next';
import { z } from 'zod';
import PageInfo from '../../components/molecules/PageInfo.client';
import RadicalDefine from '../../components/molecules/RadicalDefine.client';
import Page from '../../components/templates/Page.client';
import { radical } from '../../features/radical/radicalQuery.server';
import { smallInt } from '../../libs/schema/utils';

type RadicalsProps = {
  radical: NonNullable<Awaited<ReturnType<typeof radical>>>;
};

const Radical = ({ radical }: RadicalsProps) => (
  <Page title={`部首索引「${radical.radical}」`}>
    <PageInfo
      avatar={radical.radical}
      title="部首別索引"
      subText={`（現在は旧日本語字形で部首が「${radical.radical}」の漢字が登録されていますが、新日本語字形で部首が「${radical.radical}」のものに置換予定です。）`}
    />
    <RadicalDefine radical={radical} />
  </Page>
);

export default Radical;

export const getServerSideProps: GetServerSideProps<RadicalsProps> = async (context) => {
  const parsedId = z.object({ id: smallInt }).safeParse(context.query);
  if (parsedId.success) {
    const data = await radical(parsedId.data.id);
    if (data != null) return { props: { radical: data } };
  }
  return { notFound: true };
};
