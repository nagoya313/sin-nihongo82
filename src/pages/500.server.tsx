import ErrorPage from '~/components/templates/ErrorPage.client';

const InternalError = () => (
  <ErrorPage errorType="500" title="Internal Server Error" text="なんらかのエラーが発生しました。" />
);

export default InternalError;
