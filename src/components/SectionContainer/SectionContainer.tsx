import { FC } from 'react';
import { View } from 'react-native';
import { Title } from '../Title';
import type { SectionContainerProps } from './types';

export const SectionContainer: FC<SectionContainerProps> = ({
  title,
  children,
  containerStyle,
  titleStyle,
}) => {
  return (
    <View style={[{ marginTop: 10 }, containerStyle]}>
      <Title style={titleStyle || {}}>{title}</Title>
      {children}
    </View>
  );
};
