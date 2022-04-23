import { Link, useColorModeValue } from '@chakra-ui/react';
import { type PropsWithChildren } from '~/utils/types';

type ExternalLinkProps = PropsWithChildren<{
  href: string;
}>;

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <Link ml={1} mr={1} href={href} isExternal color={useColorModeValue('purple.600', 'purple.300')}>
    {children}
  </Link>
);

export default ExternalLink;
