import { FC } from 'react';
import { Text } from 'react-native-paper';
import { CloseButton } from '../CloseButton';
import { StyledModal } from './styles';
import type { TrailerModalProps } from './types';

export const TrailerModal: FC<TrailerModalProps> = ({ visible, onClose }) => {
  return (
    <StyledModal
      visible={visible}
      contentContainerStyle={{ height: '100%', alignItems: 'center' }}
    >
      <CloseButton
        onPress={() => onClose()}
        style={{
          backgroundColor: '#1a2935',
          position: 'absolute',
          bottom: 40,
        }}
      />
      <Text>Modal</Text>
    </StyledModal>
  );
};
