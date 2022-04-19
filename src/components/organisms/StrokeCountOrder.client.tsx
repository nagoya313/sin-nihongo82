import { Box, Wrap } from '@chakra-ui/react';
import { useRef } from 'react';
import { GroupedVirtuoso, type GroupedVirtuosoHandle } from 'react-virtuoso';
import { type LoadableData } from '../../features/loadable';
import { Path } from '../../features/path';
import GroupLabel from '../atoms/GroupLabel.client';
import WordItem from '../atoms/WordItem.client';
import JumpList from '../molecules/JumpList.client';

type Data = LoadableData<'radicalStrokeCountOrder' | 'radicalKanjiStrokeCountOrder'>;

const strokeCount = (data: Data[number]) => ('stroke_count' in data ? data.stroke_count : data.in_radical_stroke_count);

type StrokeCountOrderProps = {
  data: Data;
};

const StrokeCountOrder = ({ data }: StrokeCountOrderProps) => {
  const virtuoso = useRef<GroupedVirtuosoHandle>(null);

  return (
    <>
      <Box w="full">
        <GroupedVirtuoso
          ref={virtuoso}
          groupCounts={data.map(() => 1)}
          groupContent={(index) => (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <GroupLabel label={`${strokeCount(data[index]!)}画（${data[index]!.code_points.length}件）`} />
          )}
          itemContent={(index) => (
            <Wrap p={4}>
              {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                data[index]!.code_points.map((codePoint) => (
                  <WordItem key={codePoint} codePoint={codePoint} path={Path.radical} />
                ))
              }
            </Wrap>
          )}
          useWindowScroll
        />
      </Box>
      {data.length > 1 && (
        <JumpList label="画数ジャンプ" virtuoso={virtuoso} headings={data.map((data) => strokeCount(data))} />
      )}
    </>
  );
};

export default StrokeCountOrder;
