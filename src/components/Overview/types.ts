import { StyleProp, TextStyle } from 'react-native/types';

export interface OverviewProps {
  decription?: string;
  releaseDate?: string;
  descriptionStyle?: StyleProp<TextStyle>;
  launchStyle?: StyleProp<TextStyle>;
}
