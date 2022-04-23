import QueryResult from '~/components/atoms/QueryResult.client';
import SearchNotFound from '~/components/atoms/SearchNotFound.client';
import ReadOrder from '~/components/organisms/ReadOrder.client';
import { type Loadable } from '../../loadable';

type RadicalReadOrderProps = {
  loadable: Loadable<'radicalKanjiReadOrder'>;
};

const RadicalKanjiReadOrder = ({ loadable }: RadicalReadOrderProps) => {
  const data = loadable.value;

  return <QueryResult>{data.length === 0 ? <SearchNotFound subject="漢字" /> : <ReadOrder data={data} />}</QueryResult>;
};

export default RadicalKanjiReadOrder;
