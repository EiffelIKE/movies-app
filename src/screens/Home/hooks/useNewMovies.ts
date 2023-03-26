import { useEffect, useState } from 'react';
import { useLazyGetNewMoviesQuery } from '../../../api/slices/getNewMovies';
import type { NewMoviesList } from '../../../utils/types/newMovie';

export const useNewMovies = () => {
  const [getNewMovies, { data, isSuccess }] = useLazyGetNewMoviesQuery();
  const [newMovies, setNewMovies] = useState<NewMoviesList>([]);

  useEffect(() => {
    getNewMovies(1);
  }, [getNewMovies]);

  useEffect(() => {
    if (data && isSuccess) {
      setNewMovies(data);
    }
  }, [data, isSuccess]);

  return { newMovies };
};
