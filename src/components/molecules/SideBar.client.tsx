import { Path } from '../../features/path';
import SideBarLink from '../atoms/SideBarLink.client';
import InfoIcon from '../icons/InfoIcon.client';
import RadicalIcon from '../icons/RadicalIcon.client';

const SideBar = () => (
  <nav className="p-4 text-base-content">
    <h5>メニュー</h5>
    <ul className="menu menu-compact p-1">
      <SideBarLink href={Path.radicals} title="部首索引" icon={<RadicalIcon />} />
      <SideBarLink href={Path.info} title="このサイトについて" icon={<InfoIcon />} />
    </ul>
  </nav>
);

export default SideBar;
