import { Heading, Wrap } from '@chakra-ui/react';
import RadicalIcon from '~/components/icons/RadicalIcon.client';
import { Path } from '~/features/path';
import NavCard from './NavCard.client';

const Content = () => (
  <>
    <Heading mt={8}>新日本語の世界えよーこそ！</Heading>
    <Wrap mt={4}>
      <NavCard
        href={Path.radicals}
        avatar={<RadicalIcon fontSize={24} />}
        title="部首索引"
        description="部首から漢字を検索できます。"
      />
    </Wrap>
  </>
);

export default Content;
