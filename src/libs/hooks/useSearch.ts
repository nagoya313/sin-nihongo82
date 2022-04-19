import { useControllableState } from '@chakra-ui/react';
import { unstable_useRefreshRoot as useRefreshRoot } from 'next/streaming';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { z, type ZodObject, type ZodRawShape } from 'zod';

export const useSearch = <TSchema extends ZodObject<ZodRawShape>>(schema: TSchema, defaultValue: unknown = {}) => {
  type Params = z.input<TSchema>;
  const refresh = useRefreshRoot();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [isSearching, startSearchingTransition] = (React as any).useTransition();
  const [query, setQuery] = useControllableState<Params>({
    defaultValue: schema.parse(defaultValue),
    onChange: (params) => {
      const next = schema.safeParse(params);
      if (next.success) {
        startSearchingTransition(() => {
          refresh(next.data);
        });
      }
    },
  });
  const setDebounceQuery = useDebouncedCallback(setQuery, 1000);

  return {
    isSearching,
    query,
    register: <TKey extends keyof Params>(key: TKey, debounce?: boolean) =>
      ({
        schema: schema.shape[key as keyof typeof schema.shape] as TSchema['shape'][TKey],
        onChange: debounce
          ? (next: Params[TKey] | undefined) => setDebounceQuery((prev) => ({ ...prev, [key]: next }))
          : (next: Params[TKey] | undefined) => setQuery((prev) => ({ ...prev, [key]: next })),
      } as const),
  };
};
