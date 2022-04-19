import { Box, Wrap } from '@chakra-ui/react';
import groupBy from 'lodash/groupBy';
import { useRef } from 'react';
import { GroupedVirtuoso, type GroupedVirtuosoHandle } from 'react-virtuoso';
import { type LoadableData } from '../../features/loadable';
import { Path } from '../../features/path';
import GroupLabel from '../atoms/GroupLabel.client';
import ReadBadge from '../atoms/ReadBadge.client';
import WordItem from '../atoms/WordItem.client';
import JumpList from '../molecules/JumpList.client';

type ReadOrderProps = {
  data: LoadableData<'radicalReadOrder'>;
};

const ReadOrder = ({ data }: ReadOrderProps) => {
  const virtuoso = useRef<GroupedVirtuosoHandle>(null);

  return (
    <>
      <Box w="full">
        <GroupedVirtuoso
          ref={virtuoso}
          groupCounts={data.map(() => 1)}
          groupContent={(index) => (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <GroupLabel label={`${data[index]!.read_front}（${data[index]!.results.length}件）`} />
          )}
          itemContent={(index) => (
            <Wrap p={4}>
              {Object.entries(groupBy(data[index]?.results, 'read')).map(([name, codePoints]) => (
                <>
                  {codePoints.map(({ code_point }, index) => (
                    <>
                      {index === 0 && <ReadBadge name={name} />}
                      <WordItem key={`word-${code_point}`} codePoint={code_point} path={Path.radical} />
                    </>
                  ))}
                </>
              ))}
            </Wrap>
          )}
          useWindowScroll
        />
      </Box>
      {data.length > 1 && (
        <JumpList label="よみかたジャンプ" virtuoso={virtuoso} headings={data.map(({ read_front }) => read_front)} />
      )}
    </>
  );
};

export default ReadOrder;
