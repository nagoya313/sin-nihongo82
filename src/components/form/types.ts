import { type ArrayPath, type Control, type FieldPath, type FieldValues } from 'react-hook-form';
import { type ReadonlyDeep } from 'type-fest';
import { z, type ZodObject, type ZodRawShape } from 'zod';

export type FormSchema = ZodObject<ZodRawShape>;
export type FormInputValues<TSchema extends FormSchema> = ReadonlyDeep<z.input<TSchema>>;
export type FormSubmittedValues<TSchema extends FormSchema> = ReadonlyDeep<z.infer<TSchema>>;
export type InputType = string | number;
export type FieldType = InputType;

export type TypedFieldValueControl<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues> | ArrayPath<TFieldValues>,
  TFieldType extends FieldType
> = TFieldValues[TFieldName] extends TFieldType | undefined ? Control<TFieldValues> : never;
