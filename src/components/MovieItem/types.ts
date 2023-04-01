import {
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native/types';
import { GenresList } from '../../utils/types';

export interface MovieItemProps {
  poster_path: string;
  onPress?: () => void;
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  genres?: GenresList;
  starValue: number;
  buttonStyle?: StyleProp<ViewStyle>;
  imageStyle: StyleProp<ImageStyle>;
  votes: number;
  description?: string;
  releaseDate?: string;
  ratingContainerStyle?: StyleProp<ViewStyle>;
  movieContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  launchStyle?: StyleProp<TextStyle>;
}
