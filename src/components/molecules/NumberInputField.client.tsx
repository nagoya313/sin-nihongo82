import { NumberInput, NumberInputField as CUINumberInputField } from '@chakra-ui/react';
import { type ZodNumber, type ZodOptional } from 'zod';
import { numberOnChange } from '../../libs/utils/input';
import InputField, { type InputFieldPropsBase } from './InputField.client';

type NumberSchema = ZodNumber | ZodOptional<ZodNumber>;

type NumberInputFieldProps = {
  placeholder?: string;
} & InputFieldPropsBase<NumberSchema>;

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
