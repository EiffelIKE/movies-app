import type { StyleProp, ViewStyle } from 'react-native/types';

export interface RatingMovieProps {
  starValue: number;
  votes: number;
  ratingContainerStyle?: StyleProp<ViewStyle>;
}
