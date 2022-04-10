import { Box, Heading, HStack, Link, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import CircleIcon from '../atoms/CircleIcon.client';

type NavCardProps = {
  avatar: React.ReactNode;
  title: string;
  description: string;
  href: string;
};

const NavCard = ({ avatar, title, description, href }: NavCardProps) => (
  <Box
    borderWidth={useColorModeValue('1px', undefined)}
    p={4}
    w={80}
    rounded="md"
    bg={useColorModeValue('white', 'gray.700')}
    shadow={useColorModeValue('md', undefined)}
  >
    <HStack>
      <CircleIcon>{avatar}</CircleIcon>
      <NextLink href={href} passHref>
        <Link style={{ textDecoration: 'none' }}>
          <Heading size="sm">{title}</Heading>
        </Link>
      </NextLink>
    </HStack>
    <Text mt={4}>{description}</Text>
  </Box>
);

export default NavCard;
