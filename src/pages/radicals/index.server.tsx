import { z } from 'zod';
import RadicalIcon from '../../components/icons/RadicalIcon.client';
import PageInfo from '../../components/molecules/PageInfo.client';
import RadicalSearch from '../../components/organisms/RadicalSearch.client';
import Page from '../../components/templates/Page.client';
import { radicalQueryParams } from '../../features/radical/queryParams';

type RadicalsProps = z.infer<typeof radicalQueryParams>;

const Radicals = ({ ...params }: RadicalsProps) => {
  const queryKey = radicalQueryParams.parse(params);
  console.log(queryKey);

  return (
    <Page title="部首索引">
      <PageInfo avatar={<RadicalIcon />} title="部首索引" />
      <RadicalSearch />
    </Page>
  );
};

export default Radicals;
