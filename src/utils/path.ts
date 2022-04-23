import { type GetServerSideProps } from 'next';
import { type z, type ZodObject, type ZodRawShape } from 'zod';

type SeparatePath<TPath extends string> = TPath extends `/${infer T}/${infer U}`
  ? T | SeparatePath<`/${U}`>
  : TPath extends `/${infer T}`
  ? T
  : never;
type Slugs<TSlug extends string> = TSlug extends `[${infer T}]` ? T : never;
type PathParams<TPath extends string> = {
  [key in Slugs<SeparatePath<TPath>>]: string | number;
};

export type PathParamsWithProps<TProps extends { href: string }> = TProps &
  (Slugs<SeparatePath<TProps['href']>> extends never
    ? {
        params?: never;
      }
    : {
        params: PathParams<TProps['href']>;
      });

export type MakePathArgs<TPath extends string> = Slugs<SeparatePath<TPath>> extends never
  ? [TPath]
  : [TPath, PathParams<TPath>];

export const makePath = <TPath extends string>(...args: MakePathArgs<TPath>) => {
  if (args[1] == null) return args[0];

  return args[0]
    .split('/')
    .map((str) => {
      const match = str.match(/\[(.*?)\]/);
      if (match) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const key = match[0]!.slice(1, -1) as Slugs<SeparatePath<TPath>>;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return args[1]![key];
      }
      return str;
    })
    .join('/');
};

type PathParamsSchema = ZodObject<ZodRawShape>;

type PathParamsCheckGetServerSideProps<TSchema extends PathParamsSchema, TProps> = (
  context: Parameters<GetServerSideProps<TProps>>[0],
  params: z.infer<TSchema>
) => ReturnType<GetServerSideProps<TProps>>;

export const pathParamsCheck =
  <TSchema extends PathParamsSchema, TProps>(
    schema: TSchema,
    getServerSideProps: PathParamsCheckGetServerSideProps<TSchema, TProps>
  ): GetServerSideProps =>
  async (context) => {
    const parsedParams = schema.safeParse(context.params);
    if (parsedParams.success) return getServerSideProps(context, parsedParams.data);
    console.error(parsedParams.error);
    return { notFound: true };
  };
