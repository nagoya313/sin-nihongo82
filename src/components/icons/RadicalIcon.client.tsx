import { Icon } from '@chakra-ui/react';
import { MdOutlinePark } from 'react-icons/md';
import CircleIcon from '../atoms/CircleIcon.client';

const RadicalIcon = () => (
  <CircleIcon>
    <Icon fontSize={24} as={MdOutlinePark} />
  </CircleIcon>
);

export default RadicalIcon;
