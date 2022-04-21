import { FormControl, FormErrorMessage, FormLabel, Icon, Tooltip } from '@chakra-ui/react';
import { type FieldError, type FieldPath, type FieldValues } from 'react-hook-form';
import { MdHelpOutline } from 'react-icons/md';
import { type TypedFieldValueControl } from '../../libs/form/types';

type InputFieldValue = string | number;

export type InputFieldPropsBase<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
  TValue extends InputFieldValue
> = {
  control: TypedFieldValueControl<TFieldValues, TFieldName, TValue>;
  name: TFieldName;
  label?: string;
  help?: string;
};

type InputFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
  TValue extends InputFieldValue
> = {
  error?: FieldError;
  children: React.ReactNode;
} & Omit<InputFieldPropsBase<TFieldValues, TFieldName, TValue>, 'control' | 'name'>;

const InputField = <
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
  TValue extends InputFieldValue
>({
  label,
  help,
  error,
  children,
}: InputFieldProps<TFieldValues, TFieldName, TValue>) => (
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
    {children}
    <FormErrorMessage>{error?.message}</FormErrorMessage>
  </FormControl>
);

export default InputField;
