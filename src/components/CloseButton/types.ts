import { StyleProp, ViewStyle } from 'react-native/types';

export interface CloseButtonProps {
  onPress: CallableFunction;
  style?: StyleProp<ViewStyle>;
  toOpen?: boolean;
}
