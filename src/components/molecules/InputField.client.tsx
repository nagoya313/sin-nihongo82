import { FormControl, FormErrorMessage, FormLabel, Icon, Tooltip } from '@chakra-ui/react';
import { MdHelpOutline } from 'react-icons/md';

type InputFieldValue = string | number;

export type InputFieldPropsBase<TValue extends InputFieldValue> = {
  label?: string;
  help?: string;
  onChange: (value: TValue | undefined) => void;
  errors?: ReadonlyArray<string>;
};

type InputFieldProps<TValue extends InputFieldValue> = {
  children: (onChange: (value: TValue | undefined) => void) => React.ReactNode;
} & InputFieldPropsBase<TValue>;

const InputField = <TValue extends InputFieldValue>({
  label,
  help,
  onChange,
  errors,
  children,
}: InputFieldProps<TValue>) => (
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
