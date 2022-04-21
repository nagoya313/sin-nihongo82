import { type DefaultValues, type FormChildrenProps, type FormSchema } from './types';
import { useFormRegister } from './useRegister';

type FormImplProps<TSchema extends FormSchema> = {
  scope: symbol;
  schema: TSchema;
  defaultValues?: DefaultValues<TSchema>;
  children: (props: FormChildrenProps<TSchema>) => React.ReactNode;
};

export const FormImpl = <TSchema extends FormSchema>({
  scope,
  schema,
  defaultValues,
  children,
}: FormImplProps<TSchema>) => {
  const register = useFormRegister(scope, schema, defaultValues);

  return <>{children({ formState: { isInvalid: false }, register })}</>;
};
