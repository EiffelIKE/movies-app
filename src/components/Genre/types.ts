import { ReactNode } from 'react';
import { StyleProp, TextStyle } from 'react-native/types';

export interface GenreProps {
  active?: boolean;
  children: ReactNode;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}
