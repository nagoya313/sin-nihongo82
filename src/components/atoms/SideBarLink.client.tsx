import { Flex, Icon, Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { type IconType } from 'react-icons';

type SideBarLinkProps = {
  title: string;
  href: string;
  icon: IconType;
  onClick: () => void;
};

const SideBarLink = ({ href, title, icon, onClick }: SideBarLinkProps) => {
  const { pathname } = useRouter();
  const selectedBg = useColorModeValue('purple.100', 'purple.800');
  const selectedColor = useColorModeValue('purple.800', 'purple.100');

  return (
    <NextLink href={href} passHref>
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
          <Icon mr={4} fontSize={16} as={icon} />
          {title}
        </Flex>
      </Link>
    </NextLink>
  );
};

export default SideBarLink;
