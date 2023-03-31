import type { NewMovieItem, MovieGenres, GenresList } from '../../utils/types';

export interface NewMovieProps {
  data: NewMovieItem;
  onPress?: CallableFunction;
  getGenreName?: (genre: MovieGenres) => GenresList;
}
