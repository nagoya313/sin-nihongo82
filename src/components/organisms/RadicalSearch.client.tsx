import { HStack, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react';
import SearchPanel from '../../components/molecules/SearchPanel.client';
import { radicalQueryParams } from '../../features/radical/queryParams';
import { useSearch } from '../../libs/hooks/useSearch';
import { getNumberRange } from '../../libs/schema/utils';
import NumberInputField from '../molecules/NumberInputField.client';
import StringInputField from '../molecules/StringInputField.client';

const RadicalSearch = () => {
  const { register } = useSearch(radicalQueryParams);
  const { min, max } = getNumberRange(radicalQueryParams.shape.strokeCount);

  return (
    <>
      <SearchPanel>
        <VStack as="form" w="full" align="start">
          <HStack align="start">
            <StringInputField
              label="よみかた"
              help="部首名は新日本語表音式によるひらがなでの前方一致で絞り込みができます。"
              {...register('read', true)}
              placeholder="いち、しょー、つずみ"
            />
            <NumberInputField label="画数" {...register('strokeCount', true)} placeholder={`${min}〜${max}`} />
          </HStack>
        </VStack>
      </SearchPanel>
      <Tabs
        mt={4}
        colorScheme="purple"
        onChange={(index) => register('sort').onChange(index === 0 ? 'stroke_count' : 'read')}
      >
        <TabList>
          <Tab>画数順</Tab>
          <Tab>よみかた順</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>画数順！</p>
          </TabPanel>
          <TabPanel>
            <p>讀み方順！</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default RadicalSearch;
