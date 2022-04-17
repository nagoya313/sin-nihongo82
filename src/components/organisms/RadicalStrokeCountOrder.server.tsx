import { type Loadable } from '../../features/loadable';
import StrokeCountOrder from './StrokeCountOrder.client';

type RadicalStrokeCountOrderProps = {
  loadable: Loadable<'radicalStrokeCountOrder'>;
};

const RadicalStrokeCountOrder = ({ loadable }: RadicalStrokeCountOrderProps) => (
  <StrokeCountOrder data={loadable.value} subject="部首" />
);

export default RadicalStrokeCountOrder;
