import { FC } from 'react';
import Carousel from 'react-native-snap-carousel';
import type { MoviesCarouselProps } from './types';

export const MoviesCarousel: FC<MoviesCarouselProps> = ({
  data,
  sliderWidth,
  itemWidth,
  RenderItem,
  getGenreName,
  onPress,
  firstItem,
  inactiveSlideScale,
  inactiveSliderOpacity,
}) => {
  return (
    <Carousel
      layout="default"
      data={data}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      firstItem={firstItem || 0}
      inactiveSlideScale={inactiveSlideScale}
      inactiveSlideOpacity={inactiveSliderOpacity}
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
