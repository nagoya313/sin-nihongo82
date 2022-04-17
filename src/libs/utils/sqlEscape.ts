export const escapeLike = (value: string) => value.replaceAll(/[%_/]/g, '\\$&');
