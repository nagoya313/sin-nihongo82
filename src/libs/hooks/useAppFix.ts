import { useEffect, useState } from 'react';

export const useAppFix = () => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  return { isReturnNull: !showChild, isReturnEmpty: typeof window === 'undefined' };
};
