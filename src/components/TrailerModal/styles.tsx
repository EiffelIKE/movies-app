import { Modal, IconButton } from 'react-native-paper';
import styled from 'styled-components/native';

export const StyledModal = styled(Modal)`
  background-color: #000000;
`;

export const CloseButton = styled(IconButton)`
  background-color: #1a2935;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  position: absolute;
  bottom: 20px;
`;
