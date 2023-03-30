import { FC, useContext } from 'react';
import { StyledIcon } from './styles';
import { ThemeContext } from '../../Theme/context';
import type { CloseButtonProps } from './types';

export const CloseButton: FC<CloseButtonProps> = ({
  onPress,
  style,
  toOpen,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledIcon
      icon={toOpen ? 'play' : 'close'}
      style={[{ backgroundColor: theme.buttons }, style]}
      onPress={() => onPress()}
    />
  );
};
