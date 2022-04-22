export const stringOnChange =
  (onChange: (value: string | undefined) => void) =>
  ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(target.value.trim() || undefined);

export const numberOnChange = (onChange: (value: number | undefined) => void) => (_: string, valueAsNumber: number) =>
  onChange(isNaN(valueAsNumber) ? undefined : valueAsNumber);
