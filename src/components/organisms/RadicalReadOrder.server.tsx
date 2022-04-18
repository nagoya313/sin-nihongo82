import { type Loadable } from '../../features/loadable';
import SearchNotFound from '../atoms/SearchNotFound.client';
import QueryResult from './QueryResult.client';
import ReadOrder from './ReadOrder.client';

type RadicalReadOrderProps = {
  loadable: Loadable<'radicalReadOrder'>;
};

const RadicalReadOrder = ({ loadable }: RadicalReadOrderProps) => {
  const data = loadable.value;

  return <QueryResult>{data.length === 0 ? <SearchNotFound subject="部首" /> : <ReadOrder data={data} />}</QueryResult>;
};

export default RadicalReadOrder;
