import { Flex, Heading, Text } from '@chakra-ui/react';
import { type radical } from '../../features/radical/radicalQuery.server';

type RadicalDefineProps = {
  radical: NonNullable<Awaited<ReturnType<typeof radical>>>;
};

const RadicalDefine = ({ radical }: RadicalDefineProps) => (
  <>
    <Flex as="dl" wrap="wrap" p={4}>
      <Heading as="dt" size="sm" w="30%">
        画数
      </Heading>
      <Text as="dd" w="70%">
        {radical.stroke_count}
      </Text>
      <Heading as="dt" size="sm" w="30%">
        よみかた
      </Heading>
      <Text as="dd" w="70%">
        {radical.reads.join('　')}
      </Text>
      <Heading as="dt" size="sm" w="30%">
        この部首を持つ漢字の数
      </Heading>
      <Text as="dd" w="70%">
        {radical.kanji_count}
      </Text>
    </Flex>
  </>
);

export default RadicalDefine;
