import { FC } from 'react';
import Carousel from 'react-native-snap-carousel';
import type { MoviesCarouselProps } from './types';

export const MoviesCarousel: FC<MoviesCarouselProps> = ({ data }) => {
  return <Carousel layout="default" />;
};
