import { Flex, Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { type PathString } from '~/features/path';
import { makePath, type MakePathArgs, type PathParamsWithProps } from '~/utils/path';

type SideBarLinkProps<THref extends PathString> = PathParamsWithProps<{
  title: string;
  href: THref;
  icon: React.ReactNode;
  onClick: () => void;
}>;

const SideBarLink = <THref extends PathString>({ href, title, icon, onClick, params }: SideBarLinkProps<THref>) => {
  const { pathname } = useRouter();
  const selectedBg = useColorModeValue('purple.100', 'purple.800');
  const selectedColor = useColorModeValue('purple.800', 'purple.100');

  return (
    <NextLink href={makePath<THref>(...([href, params] as MakePathArgs<THref>))} passHref>
      <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} onClick={onClick} color={undefined}>
        <Flex
          align="center"
          mt={2}
          ml={4}
          mr={4}
          p={2}
          rounded="md"
          role="group"
          bg={pathname === href ? selectedBg : undefined}
          color={pathname === href ? selectedColor : undefined}
        >
          {icon}
          {title}
        </Flex>
      </Link>
    </NextLink>
  );
};

export default SideBarLink;
