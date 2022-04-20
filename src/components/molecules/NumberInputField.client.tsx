import { NumberInput, NumberInputField as CUINumberInputField } from '@chakra-ui/react';
import { numberOnChange } from '../../libs/utils/input';
import InputField, { type InputFieldPropsBase } from './InputField.client';

type NumberInputFieldProps = {
  placeholder?: string;
} & InputFieldPropsBase<number>;

const NumberInputField = ({ placeholder, ...others }: NumberInputFieldProps) => (
  <InputField {...others}>
    {(handleChange) => (
      <NumberInput focusBorderColor="purple.400" onChange={numberOnChange(handleChange)} clampValueOnBlur={false}>
        <CUINumberInputField placeholder={placeholder} />
      </NumberInput>
    )}
  </InputField>
);

export default NumberInputField;
