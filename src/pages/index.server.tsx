import Heading from '../components/chakra-ui/Heading.client';
import Wrap from '../components/chakra-ui/Wrap.client';
import WrapItem from '../components/chakra-ui/WrapItem.client';
import RadicalIcon from '../components/icons/RadicalIcon.client';
import NavCard from '../components/molecules/NavCard.client';
import Page from '../components/templates/Page.client';
import { Path } from '../features/path';

const Home = () => (
  <Page>
    <Heading mt={8}>新日本語の世界えよーこそ！</Heading>
    <Wrap mt={4}>
      <WrapItem>
        <NavCard
          href={Path.radicals}
          avatar={<RadicalIcon fontSize={24} />}
          title="部首索引"
          description="部首から漢字を検索できます。"
        />
      </WrapItem>
    </Wrap>
  </Page>
);

export default Home;
