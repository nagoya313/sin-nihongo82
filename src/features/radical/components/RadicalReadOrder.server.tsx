import SearchNotFound from '~/components/atoms/SearchNotFound.client';
import QueryResult from '~/components/organisms/QueryResult.client';
import ReadOrder from '~/components/organisms/ReadOrder.client';
import { type Loadable } from '../../loadable';

type RadicalReadOrderProps = {
  loadable: Loadable<'radicalReadOrder'>;
};

const RadicalReadOrder = ({ loadable }: RadicalReadOrderProps) => {
  const data = loadable.value;

  return <QueryResult>{data.length === 0 ? <SearchNotFound subject="部首" /> : <ReadOrder data={data} />}</QueryResult>;
};

export default RadicalReadOrder;
