import { type NextRouter } from 'next/router';
import RadicalIcon from '../../components/icons/RadicalIcon.client';
import PageInfo from '../../components/molecules/PageInfo.client';
import RadicalSearch from '../../components/organisms/RadicalSearch.client';
import Page from '../../components/templates/Page.client';
import { radicalQueryParams } from '../../features/radical/queryParams';
import { getParams } from '../../libs/utils/router';

type RadicalsProps = {
  router: NextRouter;
};

const Radicals = ({ router }: RadicalsProps) => {
  const queryKey = radicalQueryParams.parse(getParams(router));

  return (
    <Page title="部首索引">
      <PageInfo avatar={<RadicalIcon />} title="部首索引" />
      <RadicalSearch />
    </Page>
  );
};

export default Radicals;
