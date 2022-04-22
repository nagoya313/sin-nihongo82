import { useUser } from '@auth0/nextjs-auth0';
import { IconButton } from '@chakra-ui/react';
import NextLink from 'next/link';
import { MdEdit } from 'react-icons/md';
import { type PathString } from '~/features/path';

type EditButtonProps = {
  href: PathString;
};

const RadicalEditButton = ({ href }: EditButtonProps) => {
  const { user } = useUser();

  if (user == null) return null;

  return (
    <NextLink href={href} passHref>
      <IconButton aria-label="edit" icon={<MdEdit />} />
    </NextLink>
  );
};

export default RadicalEditButton;
