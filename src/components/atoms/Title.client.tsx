import Head from 'next/head';

type TitleProps = {
  title?: string;
};

const Title = ({ title }: TitleProps) => (
  <Head>
    {typeof window === 'undefined' || title == null ? <title>新日本語</title> : <title>新日本語｜{title}</title>}
  </Head>
);

export default Title;
