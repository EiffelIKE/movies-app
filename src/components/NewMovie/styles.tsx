import styled from 'styled-components/native';
import { Text, Title } from 'react-native-paper';

export const MovieImg = styled.Image`
  width: 100%;
  height: 400px;
  border-radius: 15px;
`;

export const MovieTitle = styled(Title)`
  margin: 10px 10px 0;
`;

export const MovieGenres = styled.View`
  flex-direction: row;
  margin: 0 10px;
`;

export const Genre = styled(Text)`
  color: #8997a5;
  font-size: 12px;
`;
