import { FormControl, FormLabel, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import { type ZodDefault, type ZodEnum } from 'zod';

type RadioFieldsetProps<TValues extends [string, ...string[]]> = {
  label?: string;
  onChange: (next: TValues[number]) => void;
  schema: ZodDefault<ZodEnum<TValues>>;
  radioLabels: { readonly [key in TValues[number]]: string };
  disabled?: boolean;
};

const RadioFieldset = <TValues extends [string, ...string[]]>({
  label,
  onChange,
  schema,
  radioLabels,
  disabled,
}: RadioFieldsetProps<TValues>) => (
  <FormControl as="fieldset">
    {label && <FormLabel as="legend">{label}</FormLabel>}
    <RadioGroup onChange={onChange} defaultValue={schema._def.defaultValue()} isDisabled={disabled}>
      <HStack whiteSpace="nowrap">
        {Object.keys(radioLabels).map((value) => (
          <Radio colorScheme="purple" orientation="horizontal" key={value} value={value}>
            {radioLabels[value as TValues[number]]}
          </Radio>
        ))}
      </HStack>
    </RadioGroup>
  </FormControl>
);

export default RadioFieldset;
