import { Center, HStack, Icon, LinkBox, LinkOverlay, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { type IconType } from 'react-icons';

type SideBarLinkProps = {
  title: string;
  href: string;
  icon: IconType;
  onClick: () => void;
};

export const SideBarLink = ({ href, title, icon, onClick }: SideBarLinkProps) => {
  const { pathname } = useRouter();
  const selectedBg = useColorModeValue('purple.100', 'purple.800');
  const selectedColor = useColorModeValue('purple.800', 'purple.100');
  const selected = pathname === href;

  return (
    <LinkBox onClick={onClick}>
      <HStack p={1} rounded="md" bg={selected ? selectedBg : undefined} color={selected ? selectedColor : undefined}>
        <NextLink href={href} passHref>
          <LinkOverlay onClick={onClick}>
            <Center>
              <Icon ml={2} mr={4} as={icon} />
              <Text>{title}</Text>
            </Center>
          </LinkOverlay>
        </NextLink>
      </HStack>
    </LinkBox>
  );
};
