import { Text } from '@chakra-ui/react';
import CircleIcon from '../atoms/CircleIcon.client';
import Title from '../atoms/Title.client';
import PageTitle from '../molecules/PageTitle.client';
import Layout from '../organisms/Layout.client';

type ErrorPageProps = {
  errorType: '404' | '500';
  title: string;
  text: string;
};

const ErrorPage = ({ errorType, title, text }: ErrorPageProps) => (
  <Layout>
    <Title title={errorType} />
    <PageTitle avatar={<CircleIcon>{errorType}</CircleIcon>} title={title} />
    <Text mt={4}>{text}</Text>
  </Layout>
);

export default ErrorPage;
