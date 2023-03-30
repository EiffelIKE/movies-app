import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useLazyGetMovieTrailerQuery } from '../../../api/slices/useGetMovieTrailer';
import { getTrailerKey } from '../../../utils/functions';
import type { MovieRoute } from '../../../utils/types';

export const useGetTrailer = () => {
  const [getMovieTrailer, { data, isSuccess }] = useLazyGetMovieTrailerQuery();
  const [trailer, setTrailer] = useState<string>();
  const { params } = useRoute<MovieRoute>();
  const { id } = params;

  useEffect(() => {
    if (id) {
      getMovieTrailer(id);
    }
  }, [id, getMovieTrailer]);

  useEffect(() => {
    if (data && isSuccess) {
      const { key } = getTrailerKey(data);
      setTrailer(key);
    }
  }, [data, isSuccess]);

  return { trailer };
};
