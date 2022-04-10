import { Heading, Stack } from '@chakra-ui/react';
import { Path } from '../../features/path';
import SideBarLink from '../atoms/SideBarLink.client';
import InfoIcon from '../icons/InfoIcon.client';
import RadicalIcon from '../icons/RadicalIcon.client';

const iconProps = { mr: 4, fontSize: 16 } as const;

type SideBarProps = {
  onClose: () => void;
};

const SideBar = ({ onClose }: SideBarProps) => (
  <Stack as="nav" spacing={0}>
    <Heading as="h5" size="sm" p={1}>
      メニュー
    </Heading>
    <SideBarLink href={Path.radicals} title="部首索引" icon={<RadicalIcon {...iconProps} />} onClick={onClose} />
    <SideBarLink href={Path.info} title="このサイトについて" icon={<InfoIcon {...iconProps} />} onClick={onClose} />
  </Stack>
);

export default SideBar;
