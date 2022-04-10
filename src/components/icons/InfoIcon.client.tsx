import { Icon, type IconProps } from '@chakra-ui/react';
import { MdOutlineInfo } from 'react-icons/md';

type InfoIconProps = Omit<IconProps, 'as'>;

const InfoIcon = ({ fontSize = 24, ...props }: InfoIconProps) => (
  <Icon {...props} fontSize={fontSize} as={MdOutlineInfo} />
);

export default InfoIcon;
