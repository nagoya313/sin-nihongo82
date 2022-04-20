import { VStack } from '@chakra-ui/react';
import { type DefaultValues, type FormChildrenProps, type FormSchema } from './types';
import { useRegister } from './useRegister';

type FormImplProps<TSchema extends FormSchema> = {
  schema: TSchema;
  defaultValues?: DefaultValues<TSchema>;
  children: (props: FormChildrenProps<TSchema>) => React.ReactNode;
};

export const FormImpl = <TSchema extends FormSchema>({ schema, defaultValues, children }: FormImplProps<TSchema>) => {
  const register = useRegister(schema, defaultValues);

  return (
    <VStack mt={4} align="start" as="form">
      {children({
        formState: { isInvalid: false },
        register,
      })}
    </VStack>
  );
};
