import { FC, useContext } from 'react';
import { Button } from 'react-native-paper';
import { ThemeContext } from '../../Theme/context';
import type { LoadMoreProps } from './types';

export const LoadMoreButton: FC<LoadMoreProps> = ({
  onPress,
  style,
  contenStyle,
}) => {
  const { active } = useContext(ThemeContext);
  return (
    <Button
      mode="text"
      style={style}
      onPress={() => onPress()}
      labelStyle={{ color: active === 'dark' ? '#fff' : '#000' }}
      contentStyle={contenStyle}
    >
      Load more...
    </Button>
  );
};
