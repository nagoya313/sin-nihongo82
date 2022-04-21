import { Button } from '@chakra-ui/react';
import { useFormState, type Control, type FieldValues } from 'react-hook-form';

type SubmitButtonProps<TFieldValues extends FieldValues> = {
  text: string;
  control: Control<TFieldValues>;
};

const SubmitButton = <TFieldValues extends FieldValues>({ text, control }: SubmitButtonProps<TFieldValues>) => {
  const { isValid } = useFormState({ control });

  return (
    <Button type="submit" isDisabled={!isValid}>
      {text}
    </Button>
  );
};

export default SubmitButton;
