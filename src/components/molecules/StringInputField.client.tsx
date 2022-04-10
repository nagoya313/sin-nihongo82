import { Input } from '@chakra-ui/react';
import { type ZodOptional, type ZodString } from 'zod';
import { stringOnChange } from '../../libs/utils/input';
import InputField, { type InputFieldPropsBase } from './InputField.client';

type StringSchema = ZodString | ZodOptional<ZodString>;

type StringInputFieldProps = {
  placeholder?: string;
} & InputFieldPropsBase<StringSchema>;

const StringInputField = ({ placeholder, ...othres }: StringInputFieldProps) => (
  <InputField {...othres}>
    {(handleChange) => (
      <Input focusBorderColor="purple.400" placeholder={placeholder} onChange={stringOnChange(handleChange)} />
    )}
  </InputField>
);

export default StringInputField;
