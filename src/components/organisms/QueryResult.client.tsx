import { Box, Flex } from '@chakra-ui/react';

type QueryResultProps = {
  children: React.ReactNode;
};

const QueryResult = ({ children }: QueryResultProps) => (
  <Flex mt={2}>
    <Box w="full">{children}</Box>
  </Flex>
);

export default QueryResult;
