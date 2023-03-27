import type { NewMovieItem } from '../../utils/types';

export interface MovieByGenreProps {
  data: NewMovieItem;
  onPress?: CallableFunction;
}
