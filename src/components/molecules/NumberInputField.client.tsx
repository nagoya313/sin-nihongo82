import { NumberInput, NumberInputField as CUINumberInputField } from '@chakra-ui/react';
import { Controller, useFormState, type FieldPath, type FieldValues } from 'react-hook-form';
import { numberOnChange } from '../../libs/utils/input';
import InputField, { type InputFieldPropsBase } from './InputField.client';

type NumberInputFieldProps<TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>> = {
  placeholder?: string;
} & InputFieldPropsBase<TFieldValues, TFieldName, number>;

const NumberInputField = <TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>>({
  control,
  name,
  placeholder,
  ...others
}: NumberInputFieldProps<TFieldValues, TFieldName>) => {
  const { errors } = useFormState({ control, name });

  return (
    <InputField error={errors[name]} {...others}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ...otherField } }) => (
          <NumberInput
            focusBorderColor="purple.400"
            clampValueOnBlur={false}
            onChange={numberOnChange(onChange)}
            defaultValue={value ?? ''}
            {...otherField}
          >
            <CUINumberInputField placeholder={placeholder} />
          </NumberInput>
        )}
      />
    </InputField>
  );
};

export default NumberInputField;
