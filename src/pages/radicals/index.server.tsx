import { Suspense } from 'react';
import { z } from 'zod';
import RadicalIcon from '../../components/icons/RadicalIcon.client';
import PageInfo from '../../components/molecules/PageInfo.client';
import RadicalSearch from '../../components/organisms/RadicalSearch.client';
import RadicalStrokeCountOrder from '../../components/organisms/RadicalStrokeCountOrder.client';
import Page from '../../components/templates/Page.client';
import { Loadable } from '../../features/loadable';
import { radicalQueryParams } from '../../features/radical/queryParams';

type RadicalsProps = z.infer<typeof radicalQueryParams>;

const Radicals = ({ ...params }: RadicalsProps) => {
  const queryParams = radicalQueryParams.parse(params);
  const loadable = new Loadable('radicalStrokeCountOrder', queryParams);

  return (
    <Page title="部首索引">
      <PageInfo avatar={<RadicalIcon />} title="部首索引" />
      <RadicalSearch>
        <Suspense fallback={null}>
          <RadicalStrokeCountOrder loadable={loadable} />
        </Suspense>
      </RadicalSearch>
    </Page>
  );
};

export default Radicals;
