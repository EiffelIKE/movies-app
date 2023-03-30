import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useLazyGetMoviesByIdQuery } from '../../../api/slices/useGetMovieById';
import { MovieRoute, Movie } from '../../../utils/types';

export const useGetMovie = () => {
  const [getMoviesById, { data, isSuccess }] = useLazyGetMoviesByIdQuery();
  const [movie, setMovie] = useState<Movie>();
  const { params } = useRoute<MovieRoute>();
  const { id } = params;

  useEffect(() => {
    if (id) {
      getMoviesById(id);
    }
  }, [id, getMoviesById]);

  useEffect(() => {
    if (data && isSuccess) {
      setMovie(data);
    }
  }, [data, isSuccess]);

  return { movie };
};
