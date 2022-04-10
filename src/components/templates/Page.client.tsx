import HeadTitle from '../atoms/HeadTitle.client';
import Layout from '../organisms/Layout.client';

type PageProps = {
  title?: string;
  children: React.ReactNode;
};

const Page = ({ title, children }: PageProps) => (
  <Layout>
    <HeadTitle title={title} />
    {children}
  </Layout>
);

export default Page;
