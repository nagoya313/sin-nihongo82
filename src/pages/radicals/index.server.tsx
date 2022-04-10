import RadicalIcon from '../../components/icons/RadicalIcon.client';
import PageInfo from '../../components/molecules/PageInfo.client';
import RadicalSearch from '../../components/organisms/RadicalSearch.client';
import Page from '../../components/templates/Page.client';

const Index = () => (
  <Page title="部首索引">
    <PageInfo avatar={<RadicalIcon />} title="部首索引" />
    <RadicalSearch />
  </Page>
);

export default Index;
