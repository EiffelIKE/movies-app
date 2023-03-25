import { FC } from 'react';
import { IconButton } from 'react-native-paper';
import type { MenuButtonProps } from './types';

export const MenuButton: FC<MenuButtonProps> = ({ onPress }) => {
  return <IconButton icon="menu" onPress={onPress} />;
};
