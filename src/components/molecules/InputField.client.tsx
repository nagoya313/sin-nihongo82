import { FormControl, FormErrorMessage, FormLabel, Icon, Tooltip } from '@chakra-ui/react';
import { useState } from 'react';
import { MdHelpOutline } from 'react-icons/md';
import { type ZodNumber, type ZodString, type ZodTypeAny } from 'zod';
import { type RemoveZodOptional, type ZodOptionalable } from '../../libs/schema/utils';

type ChangeValue<TZodType extends ZodTypeAny> = RemoveZodOptional<TZodType> extends ZodString
  ? string
  : RemoveZodOptional<TZodType> extends ZodNumber
  ? number
  : never;
type InputFieldSchema = ZodOptionalable<ZodString> | ZodOptionalable<ZodNumber>;

export type InputFieldPropsBase<TSchema extends InputFieldSchema> = {
  label?: string;
  help?: string;
  onChange: (value: ChangeValue<TSchema> | undefined) => void;
  schema: TSchema;
};

type InputFieldProps<TSchema extends InputFieldSchema> = {
  children: (onChange: (value: ChangeValue<TSchema> | undefined) => void) => React.ReactNode;
} & InputFieldPropsBase<TSchema>;

const InputField = <TSchema extends InputFieldSchema>({
  label,
  help,
  onChange,
  schema,
  children,
}: InputFieldProps<TSchema>) => {
  const [error, setError] = useState<string>();
  const handleChange = (value: ChangeValue<TSchema> | undefined) => {
    const parsed = schema.safeParse(value);
    if (parsed.success) {
      onChange(value);
      setError(undefined);
    } else {
      setError(parsed.error.errors[0]?.message);
    }
  };

  return (
    <FormControl isInvalid={error != null}>
      {label && (
        <FormLabel>
          {label}
          {help && (
            <Tooltip label={help}>
              <span>
                <Icon as={MdHelpOutline} />
              </span>
            </Tooltip>
          )}
        </FormLabel>
      )}
      {children(handleChange)}
      <FormErrorMessage>{error != null && error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
