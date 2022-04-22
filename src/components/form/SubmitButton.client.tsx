import { Button } from '@chakra-ui/react';
import { useFormState, type Control, type FieldValues } from 'react-hook-form';

type SubmitButtonProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  text: string;
};

const SubmitButton = <TFieldValues extends FieldValues>({ control, text }: SubmitButtonProps<TFieldValues>) => {
  const { isValid } = useFormState({ control });

  return (
    <Button type="submit" isDisabled={!isValid}>
      {text}
    </Button>
  );
};

export default SubmitButton;
