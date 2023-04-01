import { useEffect, useState } from 'react';
import { useLazyGetPopularMoviesQuery } from '../../../api/slices/useGetPopularMovies';
import { NewMoviesList } from '../../../utils/types';

export const usePopular = () => {
  const [getPopularMovies, { data, isSuccess }] =
    useLazyGetPopularMoviesQuery();
  const [popularMovies, setPopularMovies] = useState<NewMoviesList>([]);

  useEffect(() => {
    getPopularMovies(1);
  }, [getPopularMovies]);

  useEffect(() => {
    if (data && isSuccess) {
      setPopularMovies(data);
    }
  }, [data, isSuccess]);

  return { popularMovies };
};
