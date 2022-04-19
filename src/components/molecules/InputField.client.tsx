import { FormControl, FormErrorMessage, FormLabel, Icon, Tooltip } from '@chakra-ui/react';
import { MdHelpOutline } from 'react-icons/md';
import { type ZodNumber, type ZodString, type ZodTypeAny } from 'zod';
import { type RemoveZodOptional, type ZodOptionalable } from '../../libs/schema/types';

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
  errors?: ReadonlyArray<string>;
};

type InputFieldProps<TSchema extends InputFieldSchema> = {
  children: (onChange: (value: ChangeValue<TSchema> | undefined) => void) => React.ReactNode;
} & InputFieldPropsBase<TSchema>;

const InputField = <TSchema extends InputFieldSchema>({
  label,
  help,
  onChange,
  errors,
  children,
}: InputFieldProps<TSchema>) => (
  <FormControl isInvalid={errors != null}>
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
    {children(onChange)}
    <FormErrorMessage>{errors != null && errors[0]}</FormErrorMessage>
  </FormControl>
);

export default InputField;
