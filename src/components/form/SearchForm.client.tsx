import { useUpdateEffect } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { unstable_useRefreshRoot as useRefreshRoot } from 'next/streaming';
import React from 'react';
import {
  useForm,
  useFormState,
  useWatch,
  type Control,
  type FieldValues,
  type UseFormProps,
  type UseFormReturn,
} from 'react-hook-form';
import { useDebouncedCallback } from 'use-debounce';
import { type FormInputValues, type FormSchema, type FormSubmittedValues } from './types';

type SearchProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  submit: () => void;
};

const Search = <TFieldValues extends FieldValues>({ control, submit }: SearchProps<TFieldValues>) => {
  const values = useWatch({ control });
  const { isValid } = useFormState({ control });

  useUpdateEffect(() => {
    if (isValid) {
      submit();
    }
  }, [values, isValid]);

  return <></>;
};

type FormProps<TSchema extends FormSchema> = {
  schema: TSchema;
  children: (props: UseFormReturn<FormInputValues<TSchema>> & { isSearching: boolean }) => React.ReactNode;
};

const SearchForm = <TSchema extends FormSchema>({ schema, children }: FormProps<TSchema>) => {
  const refresh = useRefreshRoot();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [isSearching, startTransition] = (React as any).useTransition();
  const methods = useForm<FormInputValues<TSchema>, FormSubmittedValues<TSchema>>({
    defaultValues: schema.parse({}) as UseFormProps<FormInputValues<TSchema>>['defaultValues'],
    mode: 'onChange',
    shouldFocusError: false,
    resolver: zodResolver(schema),
  });

  const submit = methods.handleSubmit(
    useDebouncedCallback((params) => {
      startTransition(() => refresh(params));
    }, 200)
  );

  return (
    <form onSubmit={submit}>
      {children({ ...methods, isSearching })}
      <Search control={methods.control} submit={submit} />
    </form>
  );
};

export default SearchForm;
