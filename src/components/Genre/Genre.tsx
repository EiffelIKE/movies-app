import { FC } from 'react';
import { StyledText } from './styles';
import type { GenreProps } from './types';

export const Genre: FC<GenreProps> = ({
  active,
  children,
  textStyle,
  onPress,
}) => {
  return (
    <StyledText
      style={[!active && { color: '#8697a5' }, textStyle]}
      onPress={() => onPress && onPress()}
    >
      {children}
    </StyledText>
  );
};
