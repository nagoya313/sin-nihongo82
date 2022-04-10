import { Icon, type IconProps } from '@chakra-ui/react';
import { MdOutlinePark } from 'react-icons/md';

type RadicalIconProps = Omit<IconProps, 'as'>;

const RadicalIcon = ({ fontSize = 24, ...props }: RadicalIconProps) => (
  <Icon {...props} fontSize={fontSize} as={MdOutlinePark} />
);

export default RadicalIcon;
