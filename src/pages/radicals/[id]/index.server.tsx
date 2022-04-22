import { type GetServerSideProps } from 'next';
import { Suspense } from 'react';
import { z } from 'zod';
import EditButton from '~/components/atoms/EditButton.client';
import PageInfo from '~/components/molecules/PageInfo.client';
import ResultSkelton from '~/components/molecules/ResultSkelton.client';
import Page from '~/components/templates/Page.client';
import RadicalKanjiReadOrder from '~/features/kanji/components/RadicalKanjiReadOrder.server';
import RadicalKanjiSearch from '~/features/kanji/components/RadicalKanjiSearch.client';
import RadicalKanjiStrokeCountOrder from '~/features/kanji/components/RadicalKanjiStrokeCountOrder.server';
import { radicalKanjiQueryParams } from '~/features/kanji/query/params';
import { Loadable } from '~/features/loadable';
import { Path } from '~/features/path';
import RadicalDefine from '~/features/radical/components/RadicalDefine.client';
import { radical } from '~/features/radical/query/radical.server';
import { smallInt } from '~/libs/schema/postgres';
import { numberPreprocess } from '~/libs/schema/preprocess';

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
        action={<EditButton href={Path.radicalEdit(radical.code_point)} />}
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
  const parsedId = z.object({ id: numberPreprocess(smallInt) }).safeParse(context.query);
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
