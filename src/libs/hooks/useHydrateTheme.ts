import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const useHydrateTheme = () => {
  const { theme, setTheme } = useTheme();
  const [themeHydrate, setThemeHydrate] = useState<typeof theme>();

  useEffect(() => setThemeHydrate(theme), [theme]);

  return { theme: themeHydrate, setTheme };
};
