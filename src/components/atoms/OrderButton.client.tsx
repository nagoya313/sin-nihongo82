import { IconButton, useControllableState } from '@chakra-ui/react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { direction } from '../../libs/schema/utils';

type OrderButtonProps = {
  schema: typeof direction;
  onChange: (direction: 'asc' | 'desc') => void;
};

const OrderButton = ({ schema, onChange }: OrderButtonProps) => {
  const [direction, setDirection] = useControllableState<'asc' | 'desc'>({
    defaultValue: schema._def.defaultValue(),
    onChange,
  });

  return (
    <IconButton
      aria-label="order"
      onClick={() => setDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
      icon={direction === 'asc' ? <MdExpandLess /> : <MdExpandMore />}
    />
  );
};

export default OrderButton;
