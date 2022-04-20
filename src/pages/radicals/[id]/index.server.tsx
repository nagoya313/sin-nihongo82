import { type GetServerSideProps } from 'next';
import { Suspense } from 'react';
import { z } from 'zod';
import RadicalEditButton from '../../../components/atoms/RadicalEditButton.client';
import PageInfo from '../../../components/molecules/PageInfo.client';
import RadicalDefine from '../../../components/molecules/RadicalDefine.client';
import ResultSkelton from '../../../components/molecules/ResultSkelton.client';
import RadicalKanjiReadOrder from '../../../components/organisms/RadicalKanjiReadOrder.server';
import RadicalKanjiSearch from '../../../components/organisms/RadicalKanjiSearch.client';
import RadicalKanjiStrokeCountOrder from '../../../components/organisms/RadicalKanjiStrokeCountOrder.server';
import Page from '../../../components/templates/Page.client';
import { radicalKanjiQueryParams } from '../../../features/kanji/queryParams';
import { Loadable } from '../../../features/loadable';
import { radical } from '../../../features/radical/radicalQuery.server';
import { smallInt } from '../../../libs/schema/postgres';

type RadicalProps = z.infer<typeof radicalKanjiQueryParams> & {
  radical: NonNullable<Awaited<ReturnType<typeof radical>>>;
};

const Radical = ({ radical, ...params }: RadicalProps) => {
  const queryParams = radicalKanjiQueryParams.parse(params);

  return (
    <Page title={`部首索引「${radical.radical}」`}>
      <PageInfo
        avatar={radical.radical}
        title="部首別索引"
        subText={`（現在は旧日本語字形で部首が「${radical.radical}」の漢字が登録されていますが、新日本語字形で部首が「${radical.radical}」のものに置換予定です。）`}
        action={<RadicalEditButton codePoint={radical.code_point} />}
      />
      <RadicalDefine radical={radical} />
      <RadicalKanjiSearch
        strokeCountOrder={
          <Suspense fallback={<ResultSkelton />}>
            <RadicalKanjiStrokeCountOrder
              loadable={new Loadable('radicalKanjiStrokeCountOrder', { ...queryParams, radicalId: radical.code_point })}
            />
          </Suspense>
        }
        readOrder={
          <Suspense fallback={<ResultSkelton />}>
            <RadicalKanjiReadOrder
              loadable={new Loadable('radicalKanjiReadOrder', { ...queryParams, radicalId: radical.code_point })}
            />
          </Suspense>
        }
      />
    </Page>
  );
};

export default Radical;

export const getServerSideProps: GetServerSideProps<RadicalProps> = async (context) => {
  const parsedId = z.object({ id: smallInt }).safeParse(context.query);
  if (parsedId.success) {
    const data = await radical(parsedId.data.id);
    if (data != null)
      return {
        props: {
          radical: data,
          ...(JSON.parse((context.query['__props__'] as string) ?? '{}') as z.infer<typeof radicalKanjiQueryParams>),
        },
      };
  }
  return { notFound: true };
};
