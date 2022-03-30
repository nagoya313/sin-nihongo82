import { Text } from '@chakra-ui/react';
import CircleIcon from '../atoms/CircleIcon.client';
import PageTitle from '../molecules/PageTitle.client';

type ErrorPageProps = {
  errorType: '404' | '500';
  title: string;
  text: string;
};

const ErrorPage = ({ errorType, title, text }: ErrorPageProps) => (
  <>
    <PageTitle avatar={<CircleIcon>{errorType}</CircleIcon>} title={title} />
    <Text mt={4}>{text}</Text>
  </>
);

export default ErrorPage;
