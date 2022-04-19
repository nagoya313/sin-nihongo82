import { HStack, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react';
import { radicalKanjiQueryParams } from '../../features/kanji/queryParams';
import { useSearch } from '../../libs/hooks/useSearch';
import { getNumberRange } from '../../libs/schema/utils';
import NumberInputField from '../molecules/NumberInputField.client';
import RadioFieldset from '../molecules/RadioFieldset.client';
import SearchPanel from '../molecules/SearchPanel.client';
import StringInputField from '../molecules/StringInputField.client';

const reglurLabel = { none: '指定なし', true: '常用', false: '常用外' } as const;

type RadicalSearchProps = {
  strokeCountOrder: React.ReactNode;
  readOrder: React.ReactNode;
};

const RadicalKanjiSearch = ({ strokeCountOrder, readOrder }: RadicalSearchProps) => {
  const { register } = useSearch(radicalKanjiQueryParams);
  const { min, max } = getNumberRange(radicalKanjiQueryParams.shape.strokeCount);

  return (
    <>
      <SearchPanel>
        <VStack as="form" w="full" align="start">
          <HStack align="start">
            <StringInputField
              label="よみかた"
              help="漢字のよみかたは新日本語表音式によるひらがな（訓読み）、カタカナ（音読み）での前方一致で絞り込みができます。"
              {...register('read', true)}
              placeholder="いち、ショー、つずみ"
            />
            <NumberInputField label="部首内画数" {...register('strokeCount', true)} placeholder={`${min}〜${max}`} />
            <RadioFieldset label="常用漢字" {...register('regular')} radioLabels={reglurLabel} />
          </HStack>
        </VStack>
      </SearchPanel>
      <Tabs mt={4} colorScheme="purple">
        <TabList>
          <Tab>画数順</Tab>
          <Tab>よみかた順</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{strokeCountOrder}</TabPanel>
          <TabPanel>{readOrder}</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default RadicalKanjiSearch;
