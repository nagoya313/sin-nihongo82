import { HStack, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react';
import SearchPanel from '../../components/molecules/SearchPanel.client';
import { radicalQueryParams } from '../../features/radical/queryParams';
import { useSearch } from '../../libs/hooks/useSearch';
import { getNumberRange } from '../../libs/schema/utils';
import OrderButton from '../atoms/OrderButton.client';
import NumberInputField from '../molecules/NumberInputField.client';
import StringInputField from '../molecules/StringInputField.client';

type RadicalSearchProps = {
  strokeCountOrder: React.ReactNode;
  readOrder: React.ReactNode;
};

const RadicalSearch = ({ strokeCountOrder, readOrder }: RadicalSearchProps) => {
  const { register, isInvalid } = useSearch(radicalQueryParams);
  const { min, max } = getNumberRange(radicalQueryParams.shape.strokeCount);

  return (
    <>
      <SearchPanel>
        <VStack as="form" w="full" align="start">
          <HStack align="start">
            <StringInputField
              label="よみかた"
              help="部首名は新日本語表音式によるひらがなでの前方一致で絞り込みができます。"
              {...register('read')}
              placeholder="いち、しょー、つずみ"
            />
            <NumberInputField label="画数" {...register('strokeCount')} placeholder={`${min}〜${max}`} />
          </HStack>
        </VStack>
      </SearchPanel>
      <Tabs mt={4} colorScheme="purple">
        <TabList>
          <Tab>画数順</Tab>
          <Tab>よみかた順</Tab>
          <OrderButton {...register('direction')} disabled={isInvalid} />
        </TabList>
        <TabPanels>
          <TabPanel>{strokeCountOrder}</TabPanel>
          <TabPanel>{readOrder}</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default RadicalSearch;
