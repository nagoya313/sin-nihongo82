import { FormControl, FormErrorMessage, FormLabel, Icon, Tooltip } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { MdHelpOutline } from 'react-icons/md';
import { type FieldError } from '../../libs/form/types';

type InputFieldValue = string | number;

export type InputFieldPropsBase<TValue extends InputFieldValue> = {
  label?: string;
  help?: string;
  defaultValue?: TValue;
  onChange: (value: TValue | undefined) => void;
  error?: FieldError;
};

type ErrorFieldProps = {
  errorsAtom: FieldError;
};

const ErrorField = ({ errorsAtom }: ErrorFieldProps) => {
  const [errors] = useAtom(errorsAtom);

  return <>{errors != null && errors}</>;
};

type InputFieldProps<TValue extends InputFieldValue> = {
  children: React.ReactNode;
} & Omit<InputFieldPropsBase<TValue>, 'onChange' | 'defaultValue'>;

const InputField = <TValue extends InputFieldValue>({ label, help, error, children }: InputFieldProps<TValue>) => (
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
    <FormErrorMessage>{error != null && <ErrorField errorsAtom={error} />}</FormErrorMessage>
  </FormControl>
);

export default InputField;
