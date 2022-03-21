import { Heading, HStack, VStack } from '@chakra-ui/react';
import { CircleIcon } from '../atoms/CircleIcon';

type ErrorPageProps = {
  errorType: '404' | '500';
  title: string;
  text: string;
};

export const ErrorPage = ({ errorType, title, text }: ErrorPageProps) => (
  <VStack mt={8} align="start" spacing={4}>
    <HStack>
      <CircleIcon>{errorType}</CircleIcon>
      <Heading>{title}</Heading>
    </HStack>
    <Heading as="h6" size="xs">
      {text}
    </Heading>
  </VStack>
);
