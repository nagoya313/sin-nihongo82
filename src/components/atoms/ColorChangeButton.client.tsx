import { MdLightMode, MdNightlight } from 'react-icons/md';
import { useHydrateTheme } from '../../libs/hooks/useHydrateTheme';

const ColorChangeButton = () => {
  const { theme, setTheme } = useHydrateTheme();
  const colorChange = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <button className="btn btn-ghost btn-sm text-gray-400 text-lg" onClick={colorChange}>
      {theme === 'dark' ? <MdLightMode /> : <MdNightlight />}
    </button>
  );
};

export default ColorChangeButton;
