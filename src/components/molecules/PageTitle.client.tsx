import { Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/react';

type PageTitleProps = {
  avatar: React.ReactNode;
  title: string;
  subText?: string;
  action?: React.ReactNode;
};

const PageTitle = ({ avatar, title, subText, action }: PageTitleProps) => (
  <HStack spacing={4} mt={8}>
    {avatar}
    <VStack align="start">
      <Heading size="sm">{title}</Heading>
      {subText && (
        <Text fontSize="xs" color="gray">
          {subText}
        </Text>
      )}
    </VStack>
    {action && (
      <>
        <Spacer />
        {action}
      </>
    )}
  </HStack>
);

export default PageTitle;
