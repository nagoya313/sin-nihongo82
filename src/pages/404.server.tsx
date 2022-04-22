import ErrorPage from '~/components/templates/ErrorPage.client';

const NotFound = () => (
  <ErrorPage errorType="404" title="Page Not Found" text="お探しのページは見つかりませんでした。" />
);

export default NotFound;
