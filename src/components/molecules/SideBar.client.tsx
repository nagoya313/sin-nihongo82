import { Heading, Stack } from '@chakra-ui/react';
import { MdOutlineInfo, MdOutlinePark } from 'react-icons/md';
import { Path } from '../../features/path';
import SideBarLink from '../atoms/SideBarLink.client';

type SideBarProps = {
  onClose: () => void;
};

const SideBar = ({ onClose }: SideBarProps) => (
  <Stack as="nav" spacing={0}>
    <Heading as="h5" size="sm" p={1}>
      メニュー
    </Heading>
    <SideBarLink href={Path.radicals} title="部首索引" icon={MdOutlinePark} onClick={onClose} />
    <SideBarLink href={Path.info} title="このサイトについて" icon={MdOutlineInfo} onClick={onClose} />
  </Stack>
);

export default SideBar;
