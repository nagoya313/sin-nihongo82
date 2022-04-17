import { Wrap } from '@chakra-ui/react';
import { useRef } from 'react';
import { GroupedVirtuoso, type GroupedVirtuosoHandle } from 'react-virtuoso';
import { type LoadableData } from '../../features/loadable';
import { Path } from '../../features/path';
import GroupLabel from '../atoms/GroupLabel.client';
import WordItem from '../atoms/WordItem.client';

type StrokeCountOrderProps = {
  data: LoadableData<'radicalStrokeCountOrder'>;
};

const StrokeCountOrder = ({ data }: StrokeCountOrderProps) => {
  const virtuoso = useRef<GroupedVirtuosoHandle>(null);

  return (
    <GroupedVirtuoso
      ref={virtuoso}
      groupCounts={data.map(() => 1)}
      groupContent={(index) => (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        <GroupLabel label={`${data[index]!.stroke_count}画（${data[index]!.code_points.length}件）`} />
      )}
      itemContent={(index) => (
        <Wrap p={4}>
          {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            data[index]!.code_points.map((codePoint) => (
              <WordItem key={`word-${codePoint}`} codePoint={codePoint} path={Path.radical} />
            ))
          }
        </Wrap>
      )}
      useWindowScroll
    />
  );
};

export default StrokeCountOrder;
