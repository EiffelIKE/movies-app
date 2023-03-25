import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Movie, Search, News, Popular } from '../screens';

export type RootStackProps = {
  movie: undefined;
  home: undefined;
  populars: undefined;
  news: undefined;
  search: undefined;
};

const Stack = createNativeStackNavigator<RootStackProps>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerBackVisible: false }}>
      <Stack.Screen name="home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen
        name="movie"
        component={Movie}
        options={{ title: 'DinamicTitle' }}
      />
      <Stack.Screen
        name="populars"
        component={Popular}
        options={{ title: 'Popular Movies' }}
      />
      <Stack.Screen
        name="news"
        component={News}
        options={{ title: 'New movies' }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{ title: 'Search movies' }}
      />
    </Stack.Navigator>
  );
};
