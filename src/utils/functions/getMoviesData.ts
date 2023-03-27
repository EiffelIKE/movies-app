import type { NewMoviesList, NewMovieItemList } from '../types';

export const getMoviesData = (data: NewMoviesList): NewMovieItemList => {
  const ans = data.map((movie) => ({
    genre_ids: movie.genre_ids,
    id: movie.id,
    poster_path: movie.poster_path,
    title: movie.title,
  }));
  return ans;
};
