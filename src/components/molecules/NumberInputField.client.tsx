import { NumberInput, NumberInputField as CUINumberInputField } from '@chakra-ui/react';
import { numberOnChange } from '../../libs/utils/input';
import InputField, { type InputFieldPropsBase } from './InputField.client';

type NumberInputFieldProps = {
  placeholder?: string;
} & InputFieldPropsBase<number>;

const NumberInputField = ({ placeholder, defaultValue, onChange, ...others }: NumberInputFieldProps) => (
  <InputField {...others}>
    <NumberInput
      focusBorderColor="purple.400"
      defaultValue={defaultValue}
      onChange={numberOnChange(onChange)}
      clampValueOnBlur={false}
    >
      <CUINumberInputField placeholder={placeholder} />
    </NumberInput>
  </InputField>
);

export default NumberInputField;
