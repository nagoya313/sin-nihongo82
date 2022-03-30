import Image from 'next/image';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import { useHydrateTheme } from '../../libs/hooks/useHydrateTheme';
import ColorChangeButton from '../atoms/ColorChangeButton.client';
import AuthButton from './AuthButton.client';

const AppBar = () => {
  const { theme } = useHydrateTheme();

  return (
    <div className={`navbar ${theme === 'dark' ? 'border-b' : 'shadow-md'} bg-base-100 justify-between`}>
      <label htmlFor="nav-drawer" className="btn btn-ghost btn-sm text-gray-400 text-lg md:hidden">
        <MdMenu />
      </label>
      <Link href="/">
        <a className="font-bold">
          <div className="flex flex-row items-center">
            <div className="avatar hidden md:flex">
              <div className="w-10 h-10 rounded-xl relative">
                <Image src="/favicon.ico" alt="navbar icon" layout="fill" className="rounded-xl" />
              </div>
            </div>
            <p className="ml-2">新日本語</p>
          </div>
        </a>
      </Link>
      <div className="flex">
        <ColorChangeButton />
        <AuthButton />
      </div>
    </div>
  );
};

export default AppBar;
