import { FC } from 'react';
import Carousel from 'react-native-snap-carousel';
import type { MoviesCarouselProps } from './types';

export const NewMoviesCarousel: FC<MoviesCarouselProps> = ({
  data,
  sliderWidth,
  itemWidth,
  RenderItem,
  getGenreName,
  onPress,
}) => {
  return (
    <Carousel
      layout="default"
      data={data}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      renderItem={({ item }) => (
        <RenderItem
          data={item}
          getGenreName={getGenreName}
          onPress={() => onPress && onPress(item.id)}
        />
      )}
    />
  );
};
