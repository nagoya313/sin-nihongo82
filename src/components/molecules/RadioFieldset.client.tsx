import { FormControl, FormLabel, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import { Controller, type FieldPath, type FieldValues } from 'react-hook-form';
import { type TypedFieldValueControl } from '../../libs/form/types';

type RadioFieldsetProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
  TValues extends [string, ...string[]]
> = {
  control: TypedFieldValueControl<TFieldValues, TFieldName, TValues[number]>;
  name: TFieldName;
  label?: string;
  radioLabels: { readonly [key in TValues[number]]: string };
  disabled?: boolean;
};

const RadioFieldset = <
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
  TValues extends [string, ...string[]]
>({
  control,
  name,
  label,
  radioLabels,
  disabled,
}: RadioFieldsetProps<TFieldValues, TFieldName, TValues>) => (
  <FormControl as="fieldset">
    {label && <FormLabel as="legend">{label}</FormLabel>}
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...otherField } }) => (
        <RadioGroup onChange={onChange} defaultValue={value} isDisabled={disabled} {...otherField}>
          <HStack whiteSpace="nowrap">
            {Object.keys(radioLabels).map((value) => (
              <Radio colorScheme="purple" orientation="horizontal" key={value} value={value}>
                {radioLabels[value as TValues[number]]}
              </Radio>
            ))}
          </HStack>
        </RadioGroup>
      )}
    />
  </FormControl>
);

export default RadioFieldset;
