import { Box, Center, Skeleton, Wrap, WrapItem } from '@chakra-ui/react';
import times from 'lodash/times';

const ResultSkelton = () => (
  <>
    <Skeleton>
      <Box p={4} rounded={4} w="full">
        loading...
      </Box>
    </Skeleton>
    <Wrap>
      {times(3, (index) => (
        <Skeleton key={index}>
          <WrapItem>
            <Center key={index} w="40px" h="40px">
              loading...
            </Center>
          </WrapItem>
        </Skeleton>
      ))}
    </Wrap>
  </>
);

export default ResultSkelton;
