import { Text } from '@chakra-ui/react';

type SearchNotFoundProps = {
  subject: string;
};

const SearchNotFound = ({ subject }: SearchNotFoundProps) => (
  <Text>条件に当てはまる{subject}は見つかりませんでした。</Text>
);

export default SearchNotFound;
