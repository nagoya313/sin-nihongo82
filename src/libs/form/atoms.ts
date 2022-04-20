import { atom, type PrimitiveAtom } from 'jotai';
import { type ValueOf } from 'type-fest';
import { type DefaultValues, type FormSchema } from './types';

type FormValue = string | number | undefined;

type SetValue = {
  key: string;
  value: FormValue;
};

export const valuesAtom = atom<Record<string, PrimitiveAtom<FormValue>>>({});

export const updateValueAtom = atom(null, (get, set, { key, value }: SetValue) => {
  const updateAtom = get(valuesAtom)[key];
  if (updateAtom == null) {
    const atoms = { ...get(valuesAtom) };
    atoms[key] = atom(value);
    set(valuesAtom, atoms);
  } else {
    set(updateAtom, value);
  }
});

export const defaultAtoms = <TSchema extends FormSchema>(defaultValues?: DefaultValues<TSchema>) => {
  const atoms = {} as Record<string, PrimitiveAtom<ValueOf<TSchema>>>;
  if (defaultValues == null) return atoms;
  Object.keys(defaultValues).forEach((key) => {
    atoms[key] = atom(defaultValues[key]);
  });
  return atoms;
};

type SetError = {
  key: string;
  error: string | undefined;
};

type Error = string | undefined;

export const errorsAtom = atom<Record<string, PrimitiveAtom<Error>>>({});

export const updateErrorAtom = atom(null, (get, set, { key, error }: SetError) => {
  const updateAtom = get(errorsAtom)[key];
  if (updateAtom == null) {
    if (error != null) {
      const atoms = { ...get(errorsAtom) };
      atoms[key] = atom<Error>(error);
      set(errorsAtom, atoms);
    }
  } else {
    set(updateAtom, error);
  }
});

export const defaultErrors = <TSchema extends FormSchema>(schema: TSchema, defaultValues?: DefaultValues<TSchema>) => {
  const atoms = {} as Record<string, PrimitiveAtom<Error>>;
  const parsed = schema.safeParse(defaultValues);
  if (parsed.success) return atoms;
  const errors = parsed.error.flatten().fieldErrors;
  Object.keys(errors).forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    atoms[key] = atom<Error>(errors[key]![0]);
  });
  return atoms;
};
