import { ReactNode } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import type { ViewStyle } from 'react-native';

export interface SectionContainerProps {
  title: string;
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}
