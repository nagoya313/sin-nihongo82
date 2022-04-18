import { Box, Center, Skeleton, Wrap, WrapItem } from '@chakra-ui/react';
import times from 'lodash/times';

const ResultSkelton = () => (
  <>
    <Skeleton>
      <Box p={4} rounded={4} w="full">
        loading radical
      </Box>
    </Skeleton>
    <Wrap>
      {times(3, (index) => (
        <Skeleton>
          <WrapItem>
            <Center key={index} w="40px" h="40px">
              loading radical
            </Center>
          </WrapItem>
        </Skeleton>
      ))}
    </Wrap>
  </>
);

export default ResultSkelton;
