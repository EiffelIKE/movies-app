import type { NewMovieItem, MovieGenres } from '../../utils/types';

export interface NewMovieProps {
  data: NewMovieItem;
  getGenreName?: (genre: MovieGenres) => Array<string | undefined>;
}
