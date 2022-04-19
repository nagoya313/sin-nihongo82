import { type Loadable } from '../../features/loadable';
import SearchNotFound from '../atoms/SearchNotFound.client';
import QueryResult from './QueryResult.client';
import StrokeCountOrder from './StrokeCountOrder.client';

type RadicalStrokeCountOrderProps = {
  loadable: Loadable<'radicalKanjiStrokeCountOrder'>;
};

const RadicalKanjiStrokeCountOrder = ({ loadable }: RadicalStrokeCountOrderProps) => {
  const data = loadable.value;

  return (
    <QueryResult>
      {data.length === 0 ? <SearchNotFound subject="漢字" /> : <StrokeCountOrder data={data} />}
    </QueryResult>
  );
};

export default RadicalKanjiStrokeCountOrder;
