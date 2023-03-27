import { useEffect, useState, useMemo } from 'react';
import { useLazyGetNewMoviesQuery } from '../../../api/slices/useGetNewMovies';
import { getMoviesData } from '../../../utils/functions';
import type { NewMoviesList } from '../../../utils/types';

export const useNewMovies = () => {
  const [getNewMovies, { data, isSuccess }] = useLazyGetNewMoviesQuery();
  const [newMovies, setNewMovies] = useState<NewMoviesList>([]);

  const itemsData = useMemo(() => {
    return getMoviesData(newMovies);
  }, [newMovies]);

  useEffect(() => {
    getNewMovies(1);
  }, [getNewMovies]);

  useEffect(() => {
    if (data && isSuccess) {
      setNewMovies(data);
    }
  }, [data, isSuccess]);

  return { newMovies, itemsData };
};
