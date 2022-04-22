export const Path = {
  info: '/info',
  radicals: '/radicals',
  radical: (codePoint: number) => `/radicals/${codePoint}` as const,
  radicalEdit: (codePoint: number) => `/radicals/${codePoint}/edit`,
} as const;

export type PathString = string;
