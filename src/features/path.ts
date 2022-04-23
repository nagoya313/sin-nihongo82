import { ValueOf } from 'type-fest';

export const Path = {
  info: '/info',
  radicals: '/radicals',
  radical: (codePoint: number) => `/radicals/${codePoint}` as const,
  radicalEdit: (codePoint: number) => `/radicals/${codePoint}/edit` as const,
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PathValue<TValue extends ValueOf<typeof Path>> = TValue extends (...params: any[]) => string
  ? ReturnType<TValue>
  : TValue;

export type PathString = ValueOf<{
  [key in keyof typeof Path]: PathValue<typeof Path[key]>;
}>;
