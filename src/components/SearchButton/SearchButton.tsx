import { FC } from 'react';
import { IconButton } from 'react-native-paper';
import type { SearchButtonProps } from './types';

export const SearchButton: FC<SearchButtonProps> = ({ onPress }) => {
  return <IconButton icon="magnify" onPress={onPress} />;
};
