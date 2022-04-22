import { Input } from '@chakra-ui/react';
import { Controller, type FieldPath, type FieldValues } from 'react-hook-form';
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
}: StringInputFieldProps<TFieldValues, TFieldName>) => (
  <InputField control={control} name={name} {...othres}>
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...otherField } }) => (
        <Input
          focusBorderColor="purple.400"
          placeholder={placeholder}
          defaultValue={value}
          onChange={stringOnChange(onChange)}
          {...otherField}
        />
      )}
    />
  </InputField>
);

export default StringInputField;
