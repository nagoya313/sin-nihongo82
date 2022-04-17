export const Path = {
  info: '/info',
  radicals: '/radicals',
  radical: (codePoint: number) => `/radicals/${codePoint}` as const,
} as const;
