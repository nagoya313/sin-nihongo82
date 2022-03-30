import { Icon } from '@chakra-ui/react';
import { MdOutlineInfo } from 'react-icons/md';
import CircleIcon from '../atoms/CircleIcon.client';

const InfoIcon = () => (
  <CircleIcon>
    <Icon fontSize={24} as={MdOutlineInfo} />
  </CircleIcon>
);

export default InfoIcon;
