import { type GetServerSideProps } from 'next';
import { z } from 'zod';
import RadicalIcon from '../../components/icons/RadicalIcon.client';
import PageInfo from '../../components/molecules/PageInfo.client';
import Page from '../../components/templates/Page.client';
import { radicalQueryParams } from '../../features/radical/queryParams';

type RadicalsProps = z.infer<typeof radicalQueryParams> & {
  radicalId: number;
};

const Radical = ({ radicalId }: RadicalsProps) => {
  console.log(radicalId);

  return (
    <Page title="部首索引">
      <PageInfo avatar={<RadicalIcon />} title="部首索引" />
    </Page>
  );
};

export default Radical;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return { props: { radicalId: parseInt(id as string) } };
};
