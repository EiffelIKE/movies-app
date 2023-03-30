import { FC } from 'react';
import { Text } from 'react-native-paper';
import { YoutubePlayer } from '../YoutubePlayer';
import { CloseButton } from '../CloseButton';
import { useDimensions } from '../../utils/hooks';
import { StyledModal } from './styles';
import type { TrailerModalProps } from './types';

export const TrailerModal: FC<TrailerModalProps> = ({
  visible,
  trailer,
  onClose,
}) => {
  const { width, height } = useDimensions();
  return (
    <StyledModal
      visible={visible}
      contentContainerStyle={{ height: '100%', alignItems: 'center' }}
    >
      <YoutubePlayer trailer={trailer} width={width} height={0.5 * height} />
      <CloseButton
        onPress={() => onClose()}
        style={{
          position: 'absolute',
          bottom: 40,
        }}
      />
    </StyledModal>
  );
};
