import { useUser } from '@auth0/nextjs-auth0';
import { IconButton } from '@chakra-ui/react';
import NextLink from 'next/link';
import { MdEdit } from 'react-icons/md';
import { Path } from 'src/features/path';

type RadicalEditButtonProps = {
  codePoint: number;
};

const RadicalEditButton = ({ codePoint }: RadicalEditButtonProps) => {
  const { user } = useUser();

  if (user == null) return null;

  return (
    <NextLink href={Path.radicalEdit(codePoint)} passHref>
      <IconButton aria-label="radical-editMdBuild" icon={<MdEdit />} />
    </NextLink>
  );
};

export default RadicalEditButton;
