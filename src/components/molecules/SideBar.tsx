import { Heading, Stack } from '@chakra-ui/react';
import { MdOutlineInfo } from 'react-icons/md';
import { Path } from '../../features/path';
import { SideBarLink } from '../atoms/SideBarLink';

type SideBarProps = {
  onClose: () => void;
};

export const SideBar = ({ onClose }: SideBarProps) => (
  <Stack as="nav">
    <Heading as="h5" size="sm" mt={1} ml={2}>
      メニュー
    </Heading>
    <SideBarLink href={Path.radicals} title="部首索引" icon={MdOutlineInfo} onClick={onClose} />
    <SideBarLink href={Path.info} title="このサイトについて" icon={MdOutlineInfo} onClick={onClose} />
  </Stack>
);
