import { theme } from '@chakra-ui/react';

const fonts = {
  body: "'Open Sans', sans-serif",
  heading: "'Open Sans', sans-serif",
  mono: "'Open Sans', monospace",
} as const;

export const global = {
  ...theme,
  fonts,
} as const;
