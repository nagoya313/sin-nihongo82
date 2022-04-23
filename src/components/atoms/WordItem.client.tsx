import { Center, Link, WrapItem } from '@chakra-ui/react';
import NextLink from 'next/link';
import { type ValueOf } from 'type-fest';
import { type Path } from '~/features/path';
import { makePath } from '~/utils/path';

type WordItemProps = {
  href: ValueOf<Pick<typeof Path, 'radical' | 'kanji'>>;
  codePoint: number;
};

const WordItem = ({ href, codePoint }: WordItemProps) => (
  <WrapItem>
    <Center w="40px">
      <NextLink href={makePath(href, { id: codePoint })} passHref>
        <Link fontSize="xl" fontWeight="bold">
          {String.fromCodePoint(codePoint)}
        </Link>
      </NextLink>
    </Center>
  </WrapItem>
);

export default WordItem;
