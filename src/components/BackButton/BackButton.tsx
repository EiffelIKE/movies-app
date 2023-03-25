import { FC } from 'react';
import { IconButton } from 'react-native-paper';
import type { BackButtonProps } from './types';

export const BackButton: FC<BackButtonProps> = ({ onPress }) => {
  return <IconButton icon="keyboard-backspace" onPress={onPress} />;
};
