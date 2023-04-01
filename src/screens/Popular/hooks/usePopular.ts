/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useLazyGetPopularMoviesQuery } from '../../../api/slices/useGetPopularMovies';
import { usePageNumber } from '../../../utils/hooks';
import { NewMoviesList } from '../../../utils/types';

export const usePopular = () => {
  const { page, increasePage, seeMore, updateMaxPage, maxPage } =
    usePageNumber();
  const [getPopularMovies, { data, isSuccess }] =
    useLazyGetPopularMoviesQuery();
  const [popularMovies, setPopularMovies] = useState<NewMoviesList>([]);

  useEffect(() => {
    getPopularMovies(page);
  }, [page]);

  useEffect(() => {
    if (data && isSuccess) {
      if (!maxPage) {
        updateMaxPage(data.total_pages);
      }
      setPopularMovies((prev) => [...prev, ...data.results]);
    }
  }, [data, isSuccess]);

  return { popularMovies, increasePage, seeMore };
};
