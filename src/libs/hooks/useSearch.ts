import { useControllableState } from '@chakra-ui/react';
import { unstable_useRefreshRoot as useRefreshRoot } from 'next/streaming';
import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { z, type ZodObject, type ZodRawShape } from 'zod';

const emptyError = {} as Record<string, ReadonlyArray<string>>;

export const useSearch = <TSchema extends ZodObject<ZodRawShape>>(schema: TSchema, defaultValue: unknown = {}) => {
  type Params = z.input<TSchema>;
  const refresh = useRefreshRoot();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [isSearching, startTransition] = (React as any).useTransition();
  const [errors, setErrors] = useState(emptyError);
  const setDebounceQuery = useDebouncedCallback((params: Params) => startTransition(() => refresh(params)), 200);
  const [query, setQuery] = useControllableState<Params>({
    defaultValue: schema.parse(defaultValue),
    onChange: (params) => {
      const next = schema.safeParse(params);
      if (next.success) {
        setErrors(emptyError);
        setDebounceQuery(next.data);
      } else {
        setErrors(next.error.flatten().fieldErrors);
      }
    },
  });

  return {
    isSearching,
    query,
    isInvalid: errors !== emptyError,
    register: <TKey extends Extract<keyof Params, string>>(key: TKey) =>
      ({
        errors: errors[key],
        schema: schema.shape[key] as TSchema['shape'][TKey],
        onChange: (next: Params[TKey] | undefined) => setQuery((prev) => ({ ...prev, [key]: next })),
      } as const),
  };
};
