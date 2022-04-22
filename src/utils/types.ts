// eslint-disable-next-line @typescript-eslint/ban-types
export type PropsWithChildren<Props extends Record<string, unknown> = {}> = Props & {
  children: React.ReactNode;
};
