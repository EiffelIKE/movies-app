import { Dimensions } from 'react-native';

export const useDimensions = () => {
  const { width, height } = Dimensions.get('window');

  return { width, height };
};
