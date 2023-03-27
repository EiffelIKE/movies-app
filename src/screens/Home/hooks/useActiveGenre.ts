import { useState, useEffect } from 'react';
import { useLazyGetMoviesByGenreQuery } from '../../../api/slices/useMoviesByGenres';
import { NewMovieItemList } from '../../../utils/types';

export const useActiveGenre = () => {
  const [activeGenre, setActiveGenre] = useState<number>(28);
  const [moviesByGenre, setMoviesByGenre] = useState<NewMovieItemList>([]);
  const [getMoviesByGenre, { data, isSuccess }] =
    useLazyGetMoviesByGenreQuery();

  const handleActiveGenre = (id: number) => {
    setActiveGenre(id);
  };

  useEffect(() => {
    getMoviesByGenre(activeGenre);
  }, [activeGenre, getMoviesByGenre]);

  useEffect(() => {
    if (data && isSuccess) {
      setMoviesByGenre(data);
    }
  }, [data, isSuccess]);

  return { activeGenre, handleActiveGenre, moviesByGenre };
};
