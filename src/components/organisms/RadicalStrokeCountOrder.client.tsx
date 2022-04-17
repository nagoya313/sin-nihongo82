import { type Loadable } from '../../features/loadable';

type RadicalStrokeCountOrderProps = {
  loadable: Loadable<'radicalStrokeCountOrder'>;
};

const RadicalStrokeCountOrder = ({ loadable }: RadicalStrokeCountOrderProps) => <>{loadable.value}</>;

export default RadicalStrokeCountOrder;
