import { View, Text } from 'react-native';
import { usePopular } from './hooks/usePopular';

export const Popular = () => {
  const { popularMovies } = usePopular();
  return (
    <View>
      <Text>Popular Screen</Text>
    </View>
  );
};
