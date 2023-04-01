import { StyleProp, ViewStyle } from 'react-native/types';

export interface LoadMoreProps {
  onPress: CallableFunction;
  style?: StyleProp<ViewStyle>;
  contenStyle?: StyleProp<ViewStyle>;
}
