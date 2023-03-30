import { FC } from 'react';
import { StyledIcon } from './styles';
import type { CloseButtonProps } from './types';

export const CloseButton: FC<CloseButtonProps> = ({
  onPress,
  style,
  toOpen,
}) => {
  return (
    <StyledIcon
      icon={toOpen ? 'play' : 'close'}
      style={style}
      onPress={() => onPress()}
    />
  );
};
