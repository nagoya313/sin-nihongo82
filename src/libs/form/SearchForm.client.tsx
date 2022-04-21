import { Provider } from 'jotai';
import { useRef } from 'react';
import { type ZodObject, type ZodRawShape } from 'zod';
import { errorsAtom, valuesAtom } from './atoms';
import { FormImpl } from './FormImpl';
import { FormChildrenProps, type FormSchema } from './types';

type SearchFormProps<TSchema extends FormSchema> = {
  schema: TSchema;
  children: (props: FormChildrenProps<TSchema>) => React.ReactNode;
};

const SearchForm = <TSchema extends ZodObject<ZodRawShape>>({ schema, children }: SearchFormProps<TSchema>) => {
  const scope = useRef(Symbol('search-form'));

  return (
    <Provider
      initialValues={[
        [valuesAtom, {}],
        [errorsAtom, {}],
      ]}
      scope={scope.current}
    >
      <FormImpl scope={scope.current} schema={schema} defaultValues={defaultValues}>
        {(props) => children(props)}
      </FormImpl>
    </Provider>
  );
};

export default SearchForm;
