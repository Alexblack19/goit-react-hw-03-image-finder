import { LoadMoreBtn } from './Button.styled';

export function Button({handleLoadMore}) {
  return <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>;
}
