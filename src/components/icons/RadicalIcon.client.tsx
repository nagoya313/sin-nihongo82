import { Icon } from '@chakra-ui/react';
import { MdOutlinePark } from 'react-icons/md';
import { type IconProps } from '~/utils/types';

type RadicalIconProps = IconProps;

const RadicalIcon = ({ fontSize = 24, ...props }: RadicalIconProps) => (
  <Icon {...props} fontSize={fontSize} as={MdOutlinePark} />
);

export default RadicalIcon;
