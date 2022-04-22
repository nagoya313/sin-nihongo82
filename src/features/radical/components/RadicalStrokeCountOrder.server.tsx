import SearchNotFound from '~/components/atoms/SearchNotFound.client';
import QueryResult from '~/components/organisms/QueryResult.client';
import StrokeCountOrder from '~/components/organisms/StrokeCountOrder.client';
import { type Loadable } from '../../loadable';

type RadicalStrokeCountOrderProps = {
  loadable: Loadable<'radicalStrokeCountOrder'>;
};

const RadicalStrokeCountOrder = ({ loadable }: RadicalStrokeCountOrderProps) => {
  const data = loadable.value;

  return (
    <QueryResult>
      {data.length === 0 ? <SearchNotFound subject="部首" /> : <StrokeCountOrder data={data} />}
    </QueryResult>
  );
};

export default RadicalStrokeCountOrder;
