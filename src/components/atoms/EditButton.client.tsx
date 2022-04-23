import { useUser } from '@auth0/nextjs-auth0';
import { IconButton } from '@chakra-ui/react';
import NextLink from 'next/link';
import { MdEdit } from 'react-icons/md';
import { type PathString } from '~/features/path';
import { makePath, MakePathArgs, type PathParamsWithProps } from '~/utils/path';

type EditButtonProps<THref extends PathString> = PathParamsWithProps<{
  href: THref;
}>;

const RadicalEditButton = <THref extends PathString>({ href, params }: EditButtonProps<THref>) => {
  const { user } = useUser();

  if (user == null) return null;

  return (
    <NextLink href={makePath<THref>(...([href, params] as MakePathArgs<THref>))} passHref>
      <IconButton aria-label="edit" icon={<MdEdit />} />
    </NextLink>
  );
};

export default RadicalEditButton;
