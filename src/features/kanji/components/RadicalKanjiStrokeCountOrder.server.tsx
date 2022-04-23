import QueryResult from '~/components/atoms/QueryResult.client';
import SearchNotFound from '~/components/atoms/SearchNotFound.client';
import StrokeCountOrder from '~/components/organisms/StrokeCountOrder.client';
import { type Loadable } from '../../loadable';

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
