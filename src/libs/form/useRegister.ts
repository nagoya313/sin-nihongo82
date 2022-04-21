import { useAtom, useSetAtom } from 'jotai';
import { unstable_useRefreshRoot as useRefreshRoot } from 'next/streaming';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { errorsAtom, updateErrorAtom, updateValueAtom } from './atoms';
import { type DefaultValues, type FieldName, type FieldSchema, type FieldValue, type FormSchema } from './types';

export const useFormRegister = <TSchema extends FormSchema>(
  scope: symbol,
  schema: TSchema,
  defaultValues?: DefaultValues<TSchema>
) => {
  const [errors] = useAtom(errorsAtom, scope);
  const updateValue = useSetAtom(updateValueAtom, scope);
  const updateError = useSetAtom(updateErrorAtom, scope);

  return <TFieldName extends FieldName<TSchema>>(key: TFieldName) => {
    const valueSchema = schema.shape[key] as FieldSchema<TSchema, TFieldName>;

    return {
      scope,
      error: errors[key],
      schema: valueSchema,
      defaultValue: defaultValues?.[key],
      onChange: (next: FieldValue<TSchema, TFieldName> | undefined) => {
        updateValue({ key, value: next });
        const nextParsed = valueSchema.safeParse(next);
        updateError({ key, error: nextParsed.success ? undefined : nextParsed.error.flatten().formErrors[0] });
      },
    } as const;
  };
};

export const useSearchFormRegister = <TSchema extends FormSchema>(scope: symbol, schema: TSchema) => {
  const refresh = useRefreshRoot();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [isSearching, startTransition] = (React as any).useTransition();
  const setDebounceQuery = useDebouncedCallback((params: Params) => startTransition(() => refresh(params)), 200);
  const [errors] = useAtom(errorsAtom, scope);
  const updateValue = useSetAtom(updateValueAtom, scope);
  const updateError = useSetAtom(updateErrorAtom, scope);

  return <TFieldName extends FieldName<TSchema>>(key: TFieldName) => {
    const valueSchema = schema.shape[key] as FieldSchema<TSchema, TFieldName>;

    return {
      scope,
      error: errors[key],
      schema: valueSchema,
      onChange: (next: FieldValue<TSchema, TFieldName> | undefined) => {
        updateValue({ key, value: next });
        const nextParsed = valueSchema.safeParse(next);
        updateError({ key, error: nextParsed.success ? undefined : nextParsed.error.flatten().formErrors[0] });
      },
    } as const;
  };
};
