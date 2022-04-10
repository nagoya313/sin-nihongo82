import Head from 'next/head';

type HeadTitleProps = {
  title?: string;
};

const HeadTitle = ({ title }: HeadTitleProps) => (
  <Head>
    {typeof window === 'undefined' || title == null ? <title>新日本語</title> : <title>新日本語｜{title}</title>}
  </Head>
);

export default HeadTitle;
