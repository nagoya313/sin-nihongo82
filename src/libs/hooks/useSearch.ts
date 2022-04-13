import { useControllableState } from '@chakra-ui/react';
import { unstable_useRefreshRoot as useRefreshRoot } from 'next/streaming';
import { useTransition } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { z, type ZodObject, type ZodRawShape } from 'zod';

export const useSearch = <TSchema extends ZodObject<ZodRawShape>>(schema: TSchema) => {
  type Params = z.input<TSchema>;
  type Key = keyof Params;
  const refresh = useRefreshRoot();
  const [isSearching, startSearchingTransition] = useTransition();
  const [query, setQuery] = useControllableState<Params>({
    defaultValue: schema.parse({}),
    onChange: (params) => {
      const next = schema.safeParse(params);
      if (next.success) {
        refresh(next.data);
        console.log(next.data);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        startSearchingTransition(() => {});
      }
    },
  });
  const setDebounceQuery = useDebouncedCallback(setQuery, 1000);

  return {
    isSearching,
    query,
    register: <TKey extends Key>(key: TKey, debounce?: boolean) =>
      ({
        schema: schema.shape[key as keyof typeof schema.shape] as TSchema['shape'][TKey],
        onChange: debounce
          ? (next: Params[TKey] | undefined) => setDebounceQuery((prev) => ({ ...prev, [key]: next }))
          : (next: Params[TKey] | undefined) => setQuery((prev) => ({ ...prev, [key]: next })),
      } as const),
  };
};
