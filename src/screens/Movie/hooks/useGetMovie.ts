import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useLazyGetMoviesByIdQuery } from '../../../api/slices/useGetMovieById';
import { MovieRoute, NewMovie } from '../../../utils/types';

export const useGetMovie = () => {
  const [getMoviesById, { data, isSuccess }] = useLazyGetMoviesByIdQuery();
  const [movie, setMovie] = useState<NewMovie>();
  const { params } = useRoute<MovieRoute>();
  const { id } = params;

  useEffect(() => {
    getMoviesById(id);
  }, [id, getMoviesById]);

  useEffect(() => {
    if (data && isSuccess) {
      setMovie(data);
    }
  }, [data, isSuccess]);

  return { movie };
};
