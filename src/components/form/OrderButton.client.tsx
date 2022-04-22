import { IconButton } from '@chakra-ui/react';
import { Controller, useFormState, type FieldPath, type FieldValues } from 'react-hook-form';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { type TypedFieldValueControl } from './types';

type OrderButtonProps<TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>> = {
  control: TypedFieldValueControl<TFieldValues, TFieldName, 'asc' | 'desc'>;
  name: TFieldName;
  disabled?: boolean;
};

const OrderButton = <TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>>({
  control,
  name,
  disabled,
}: OrderButtonProps<TFieldValues, TFieldName>) => {
  const { isValid } = useFormState({ control });

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...otherField } }) => (
        <IconButton
          aria-label="order"
          onClick={() => onChange(value === 'asc' ? 'desc' : 'asc')}
          icon={value === 'asc' ? <MdExpandLess /> : <MdExpandMore />}
          isDisabled={!isValid || disabled}
          {...otherField}
        />
      )}
    />
  );
};

export default OrderButton;
