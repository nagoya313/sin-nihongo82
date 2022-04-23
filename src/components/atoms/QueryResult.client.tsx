import { Flex } from '@chakra-ui/react';
import { type PropsWithChildren } from '~/utils/types';

type QueryResultProps = PropsWithChildren;

const QueryResult = ({ children }: QueryResultProps) => <Flex mt={2}>{children}</Flex>;

export default QueryResult;
