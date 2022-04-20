import { Input } from '@chakra-ui/react';
import { stringOnChange } from '../../libs/utils/input';
import InputField, { type InputFieldPropsBase } from './InputField.client';

type StringInputFieldProps = {
  placeholder?: string;
} & InputFieldPropsBase<string>;

const StringInputField = ({ placeholder, defaultValue, onChange, ...othres }: StringInputFieldProps) => (
  <InputField {...othres}>
    <Input
      focusBorderColor="purple.400"
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={stringOnChange(onChange)}
    />
  </InputField>
);

export default StringInputField;
