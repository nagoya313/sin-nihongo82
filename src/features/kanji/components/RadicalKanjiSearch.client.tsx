import { HStack, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react';
import NumberInputField from '~/components/form/NumberInputField.client';
import OrderButton from '~/components/form/OrderButton.client';
import RadioFieldset from '~/components/form/RadioFieldset.client';
import SearchForm from '~/components/form/SearchForm.client';
import StringInputField from '~/components/form/StringInputField.client';
import SearchPanel from '~/components/molecules/SearchPanel.client';
import { getNumberRange } from '~/libs/schema/intRange';
import { radicalKanjiQueryParams } from '../query/params';

const reglurLabel = { none: '指定なし', true: '常用', false: '常用外' } as const;

type RadicalSearchProps = {
  strokeCountOrder: React.ReactNode;
  readOrder: React.ReactNode;
};

const RadicalKanjiSearch = ({ strokeCountOrder, readOrder }: RadicalSearchProps) => {
  const { min, max } = getNumberRange(radicalKanjiQueryParams.shape.strokeCount);

  return (
    <SearchForm schema={radicalKanjiQueryParams}>
      {({ control, isSearching }) => (
        <>
          <SearchPanel>
            <VStack w="full" align="start">
              <HStack align="start">
                <StringInputField
                  control={control}
                  name="read"
                  label="よみかた"
                  help="漢字のよみかたは新日本語表音式によるひらがな（訓読み）、カタカナ（音読み）での前方一致で絞り込みができます。"
                  placeholder="いち、ショー、つずみ"
                />
                <NumberInputField
                  control={control}
                  name="strokeCount"
                  label="部首内画数"
                  placeholder={`${min}〜${max}`}
                />
                <RadioFieldset control={control} name="regular" label="常用漢字" radioLabels={reglurLabel} />
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

export default RadicalKanjiSearch;
