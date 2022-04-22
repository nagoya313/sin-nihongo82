import { type GetServerSideProps } from 'next';
import { Suspense } from 'react';
import { z } from 'zod';
import RadicalIcon from '~/components/icons/RadicalIcon.client';
import PageInfo from '~/components/molecules/PageInfo.client';
import ResultSkelton from '~/components/molecules/ResultSkelton.client';
import Page from '~/components/templates/Page.client';
import { Loadable } from '~/features/loadable';
import RadicalReadOrder from '~/features/radical/components/RadicalReadOrder.server';
import RadicalSearch from '~/features/radical/components/RadicalSearch.client';
import RadicalStrokeCountOrder from '~/features/radical/components/RadicalStrokeCountOrder.server';
import { radicalQueryParams } from '~/features/radical/query/params';

type RadicalsProps = z.infer<typeof radicalQueryParams>;

const Radicals = ({ ...params }: RadicalsProps) => {
  const queryParams = radicalQueryParams.parse(params);

  return (
    <Page title="部首索引">
      <PageInfo avatar={<RadicalIcon />} title="部首索引" />
      <RadicalSearch
        strokeCountOrder={
          <Suspense fallback={<ResultSkelton />}>
            <RadicalStrokeCountOrder loadable={new Loadable('radicalStrokeCountOrder', queryParams)} />
          </Suspense>
        }
        readOrder={
          <Suspense fallback={<ResultSkelton />}>
            <RadicalReadOrder loadable={new Loadable('radicalReadOrder', queryParams)} />
          </Suspense>
        }
      />
    </Page>
  );
};

export default Radicals;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { __props__ } = context.query;

  return { props: JSON.parse((__props__ as string) ?? '{}') };
};
