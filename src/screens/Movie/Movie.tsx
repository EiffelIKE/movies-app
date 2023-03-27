import { View, Text } from 'react-native';
import { useGetMovie } from './hooks';

export const Movie = () => {
  const { movie } = useGetMovie();

  return (
    <View>
      <Text>Movie Screen</Text>
    </View>
  );
};
