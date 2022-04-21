import { type FormSchema, type SearchFormChildrenProps } from './types';
import { useSearchFormRegister } from './useRegister';

type SearchFormImplProps<TSchema extends FormSchema> = {
  scope: symbol;
  schema: TSchema;
  children: (props: SearchFormChildrenProps<TSchema>) => React.ReactNode;
};

export const SearchFormImpl = <TSchema extends FormSchema>({
  scope,
  schema,
  children,
}: SearchFormImplProps<TSchema>) => {
  const register = useSearchFormRegister(scope, schema);

  return <>{children({ formState: { isInvalid: false }, register })}</>;
};
