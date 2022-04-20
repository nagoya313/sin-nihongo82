import { Provider } from 'jotai';
import { type ZodObject, type ZodRawShape } from 'zod';
import { defaultAtoms, defaultErrors, errorsAtom, valuesAtom } from './atoms';
import { FormImpl } from './FormImpl';
import { FormChildrenProps, type DefaultValues, type FormSchema } from './types';

type FormProps<TSchema extends FormSchema> = {
  schema: TSchema;
  defaultValues?: DefaultValues<TSchema>;
  children: (props: FormChildrenProps<TSchema>) => React.ReactNode;
};

const Form = <TSchema extends ZodObject<ZodRawShape>>({
  schema,
  defaultValues = {} as DefaultValues<TSchema>,
  children,
}: FormProps<TSchema>) => (
  <Provider
    initialValues={[
      [valuesAtom, defaultAtoms(defaultValues)],
      [errorsAtom, defaultErrors(schema, defaultValues)],
    ]}
  >
    <FormImpl schema={schema} defaultValues={defaultValues}>
      {(props) => children(props)}
    </FormImpl>
  </Provider>
);

export default Form;
