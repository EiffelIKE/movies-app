import { useState } from 'react';

export const usePageNumber = () => {
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number | null>(10);

  const increasePage = () => {
    setPage((prev) => prev + 1);
  };

  const updateMaxPage = (num: number) => {
    setMaxPage(num);
  };

  const seeMore = maxPage ? maxPage > page : false;

  return { seeMore, page, increasePage, updateMaxPage, maxPage };
};
