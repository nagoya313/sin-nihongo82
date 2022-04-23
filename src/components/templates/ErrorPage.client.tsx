import { Text } from '@chakra-ui/react';
import HeadTitle from '../atoms/HeadTitle.client';
import Layout from '../layout/Layout.client';
import PageInfo from '../molecules/PageInfo.client';

type ErrorPageProps = {
  errorType: '404' | '500';
  title: string;
  text: string;
};

const ErrorPage = ({ errorType, title, text }: ErrorPageProps) => (
  <Layout>
    <HeadTitle title={errorType} />
    <PageInfo avatar={errorType} title={title} />
    <Text mt={4}>{text}</Text>
  </Layout>
);

export default ErrorPage;
