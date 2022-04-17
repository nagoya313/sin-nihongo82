import { Center, Link, WrapItem } from '@chakra-ui/react';
import NextLink from 'next/link';

type WordItemProps = {
  codePoint: number;
  path: (codePoint: number) => string;
};

const WordItem = ({ codePoint, path }: WordItemProps) => (
  <WrapItem>
    <Center w="40px">
      <NextLink href={path(codePoint)} passHref>
        <Link fontSize="xl" fontWeight="bold">
          {String.fromCodePoint(codePoint)}
        </Link>
      </NextLink>
    </Center>
  </WrapItem>
);

export default WordItem;
