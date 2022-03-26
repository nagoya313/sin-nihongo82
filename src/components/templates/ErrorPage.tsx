import PageTitle from '../molecules/PageTitle.client';

type ErrorPageProps = {
  errorType: '404' | '500';
  title: string;
  text: string;
};

export const ErrorPage = ({ errorType, title, text }: ErrorPageProps) => (
  <article className="mt-8">
    <PageTitle avatar={<p className="text-white">{errorType}</p>} title={title} />
    <p>{text}</p>
  </article>
);
