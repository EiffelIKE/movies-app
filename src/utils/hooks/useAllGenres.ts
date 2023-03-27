import { useEffect, useState, useCallback } from 'react';
import { useLazyGetAllGenresQuery } from '../../api/slices/useGetAllGenres';
import type { GenresList, MovieGenres } from '../types';

export const useAllGenres = () => {
  const [getAllGenres, { data, isSuccess }] = useLazyGetAllGenresQuery();
  const [allGenres, setAllGenres] = useState<GenresList>([]);

  const getGenreName = useCallback(
    (genres: MovieGenres) => {
      if (allGenres.length > 0) {
        const genresName = genres.map((genre) => {
          const currentGenre = allGenres.find((item) => item.id === genre);
          return currentGenre?.name;
        });
        return genresName;
      }
      return [];
    },
    [allGenres]
  );

  useEffect(() => {
    getAllGenres({});
  }, [getAllGenres]);

  useEffect(() => {
    if (data && isSuccess) {
      setAllGenres(data);
    }
  }, [data, isSuccess]);

  return { allGenres, getGenreName };
};
