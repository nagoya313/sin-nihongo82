import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler, type UseFormProps, type UseFormReturn } from 'react-hook-form';
import { type FormInputValues, type FormSchema, type FormSubmittedValues } from './types';

type FormProps<TSchema extends FormSchema> = {
  schema: TSchema;
  onSubmit: SubmitHandler<FormSubmittedValues<TSchema>>;
  options?: Omit<UseFormProps<FormInputValues<TSchema>>, 'resolver'>;
  children: (props: UseFormReturn<FormInputValues<TSchema>>) => React.ReactNode;
};

const Form = <TSchema extends FormSchema>({ schema, onSubmit, options, children }: FormProps<TSchema>) => {
  const methods = useForm<FormInputValues<TSchema>, FormSubmittedValues<TSchema>>({
    ...options,
    resolver: zodResolver(schema),
  });

  return <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>;
};

export default Form;
