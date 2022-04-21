import { Input } from '@chakra-ui/react';
import { useController, type FieldPath, type FieldValues } from 'react-hook-form';
import { stringOnChange } from '../../libs/utils/input';
import InputField, { type InputFieldPropsBase } from './InputField.client';

type StringInputFieldProps<TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>> = {
  placeholder?: string;
} & InputFieldPropsBase<TFieldValues, TFieldName, string>;

const StringInputField = <TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>>({
  control,
  name,
  placeholder,
  ...othres
}: StringInputFieldProps<TFieldValues, TFieldName>) => {
  const {
    field: { onChange, ...otherField },
    fieldState: { error },
  } = useController({ control, name });

  return (
    <InputField error={error} {...othres}>
      <Input
        focusBorderColor="purple.400"
        placeholder={placeholder}
        onChange={stringOnChange(onChange)}
        {...otherField}
      />
    </InputField>
  );
};

export default StringInputField;
