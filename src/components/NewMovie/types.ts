import type { NewMovieItem, MovieGenres } from '../../utils/types';

export interface NewMovieProps {
  data: NewMovieItem;
  onPress?: CallableFunction;
  getGenreName?: (genre: MovieGenres) => Array<string | undefined>;
}
