import { type Atom } from 'jotai';
import { type PartialDeep, type ReadonlyDeep } from 'type-fest';
import { z, type ZodObject, type ZodRawShape } from 'zod';

export type FormSchema = ZodObject<ZodRawShape>;
type FormInput<TSchema extends FormSchema> = z.input<TSchema>;
export type FieldName<TSchema extends FormSchema> = Extract<keyof FormInput<TSchema>, string>;
export type FieldValue<TSchema extends FormSchema, TKey extends FieldName<TSchema>> = FormInput<TSchema>[TKey];
export type FieldSchema<TSchema extends FormSchema, TKey extends FieldName<TSchema>> = TSchema['shape'][TKey];
export type FieldError = Atom<string | undefined>;
export type DefaultValues<TSchema extends FormSchema> = ReadonlyDeep<PartialDeep<FormInput<TSchema>>>;

type FormRegisterReturn<TSchema extends FormSchema, TFieldName extends FieldName<TSchema>> = {
  error: FieldError | undefined;
  schema: FieldSchema<TSchema, TFieldName>;
  defaultValue?: FieldValue<TSchema, TFieldName>;
  onChange: (next: FieldValue<TSchema, TFieldName> | undefined) => void;
};

export type FormState = {
  isInvalid: boolean;
};

export type FormChildrenProps<TSchema extends FormSchema> = {
  formState: FormState;
  register: <TKey extends FieldName<TSchema>>(key: TKey) => FormRegisterReturn<TSchema, TKey>;
};
