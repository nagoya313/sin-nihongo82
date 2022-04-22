import { FormControl, FormErrorMessage, FormLabel, Icon, Tooltip } from '@chakra-ui/react';
import { useFormState, type FieldPath, type FieldValues } from 'react-hook-form';
import { MdHelpOutline } from 'react-icons/md';
import { type TypedFieldValueControl } from './types';

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
  children: React.ReactNode;
} & InputFieldPropsBase<TFieldValues, TFieldName, TValue>;

const InputField = <
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
  TValue extends InputFieldValue
>({
  control,
  name,
  label,
  help,
  children,
}: InputFieldProps<TFieldValues, TFieldName, TValue>) => {
  const { errors } = useFormState({ control, name });
  const error = errors[name];

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
      {children}
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
