import { HStack, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react';
import React from 'react';
import SearchPanel from '../../components/molecules/SearchPanel.client';
import { radicalQueryParams } from '../../features/radical/queryParams';
import SearchForm from '../../libs/form/SearchForm.client';
import { getNumberRange } from '../../libs/schema/intRange';
import OrderButton from '../atoms/OrderButton.client';
import NumberInputField from '../molecules/NumberInputField.client';
import StringInputField from '../molecules/StringInputField.client';

type RadicalSearchProps = {
  strokeCountOrder: React.ReactNode;
  readOrder: React.ReactNode;
};

const RadicalSearch = ({ strokeCountOrder, readOrder }: RadicalSearchProps) => {
  const { min, max } = getNumberRange(radicalQueryParams.shape.strokeCount);

  return (
    <SearchForm schema={radicalQueryParams}>
      {({ control, isSearching }) => (
        <>
          <SearchPanel>
            <VStack w="full" align="start">
              <HStack align="start">
                <StringInputField
                  control={control}
                  name="read"
                  label="よみかた"
                  help="部首名は新日本語表音式によるひらがなでの前方一致で絞り込みができます。"
                  placeholder="いち、しょー、つずみ"
                />
                <NumberInputField control={control} name="strokeCount" label="画数" placeholder={`${min}〜${max}`} />
              </HStack>
            </VStack>
          </SearchPanel>
          <Tabs mt={4} colorScheme="purple">
            <TabList>
              <Tab>画数順</Tab>
              <Tab>よみかた順</Tab>
              <OrderButton control={control} name="direction" disabled={isSearching} />
            </TabList>
            <TabPanels>
              <TabPanel>{strokeCountOrder}</TabPanel>
              <TabPanel>{readOrder}</TabPanel>
            </TabPanels>
          </Tabs>
        </>
      )}
    </SearchForm>
  );
};

export default RadicalSearch;
