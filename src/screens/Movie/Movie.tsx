import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

export const Movie = () => {
  const route = useRoute();
  console.log(route);

  return (
    <View>
      <Text>Movie Screen</Text>
    </View>
  );
};
