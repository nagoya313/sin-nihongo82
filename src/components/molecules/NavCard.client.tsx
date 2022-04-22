import { Box, Heading, HStack, LinkBox, LinkOverlay, Text, useColorModeValue, WrapItem } from '@chakra-ui/react';
import NextLink from 'next/link';
import { type PathString } from '~/features/path';
import CircleIcon from '../atoms/CircleIcon.client';

type NavCardProps = {
  avatar: React.ReactNode;
  title: string;
  description: string;
  href: PathString;
};

const NavCard = ({ avatar, title, description, href }: NavCardProps) => (
  <WrapItem>
    <Box
      borderWidth={useColorModeValue('1px', undefined)}
      p={4}
      w={80}
      rounded="md"
      bg={useColorModeValue('white', 'gray.700')}
      shadow={useColorModeValue('md', undefined)}
    >
      <LinkBox as="article">
        <NextLink href={href} passHref>
          <LinkOverlay>
            <HStack>
              <CircleIcon>{avatar}</CircleIcon>
              <Heading size="sm">{title}</Heading>
            </HStack>
          </LinkOverlay>
        </NextLink>
      </LinkBox>
      <Text mt={4}>{description}</Text>
    </Box>
  </WrapItem>
);

export default NavCard;
