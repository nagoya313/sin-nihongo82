import { useAtom, useSetAtom } from 'jotai';
import { errorsAtom, updateErrorAtom, updateValueAtom } from './atoms';
import { type DefaultValues, type FieldName, type FieldSchema, type FieldValue, type FormSchema } from './types';

export const useRegister = <TSchema extends FormSchema>(schema: TSchema, defaultValues?: DefaultValues<TSchema>) => {
  const [errors] = useAtom(errorsAtom);
  const updateValue = useSetAtom(updateValueAtom);
  const updateError = useSetAtom(updateErrorAtom);

  return <TFieldName extends FieldName<TSchema>>(key: TFieldName) => {
    const valueSchema = schema.shape[key] as FieldSchema<TSchema, TFieldName>;

    return {
      error: errors[key],
      schema: valueSchema,
      defaultValue: defaultValues?.[key],
      onChange: (next: FieldValue<TSchema, TFieldName> | undefined) => {
        updateValue({ key, value: next });
        const nextParsed = valueSchema.safeParse(next);
        updateError({ key, error: nextParsed.success ? undefined : nextParsed.error.flatten().formErrors[0] });
      },
    } as const;
  };
};
