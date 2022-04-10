import Title from '../atoms/Title.client';
import Layout from '../organisms/Layout.client';

type PageProps = {
  title?: string;
  children: React.ReactNode;
};

const Page = ({ title, children }: PageProps) => (
  <Layout>
    <Title title={title} />
    {children}
  </Layout>
);

export default Page;
