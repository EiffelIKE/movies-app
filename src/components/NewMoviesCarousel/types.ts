import { FC } from 'react';
import type { NewMovieItem, MovieGenres } from '../../utils/types';
import { NewMovieProps } from '../NewMovie/types';

export interface MoviesCarouselProps {
  data: Array<NewMovieItem>;
  sliderWidth: number;
  itemWidth: number;
  RenderItem: FC<NewMovieProps>;
  onPress?: (id: number) => void;
  getGenreName?: (genre: MovieGenres) => Array<string | undefined>;
}
