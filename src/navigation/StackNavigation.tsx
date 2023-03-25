/* eslint-disable @typescript-eslint/no-explicit-any */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Movie, Search, News, Popular } from '../screens';
import { MenuButton, SearchButton, BackButton } from '../components';
import type { RootStackProps } from './types';

const Stack = createNativeStackNavigator<RootStackProps>();

export const StackNavigation = (props: any) => {
  const { navigation } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackVisible: false,
        headerTitleAlign: 'center',
        headerLeft: () => (
          <MenuButton onPress={() => navigation.openDrawer()} />
        ),
        headerRight: () => (
          <SearchButton onPress={() => navigation.navigate('search')} />
        ),
      }}
    >
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
        options={{
          title: '',
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
          headerRight: () => null,
        }}
      />
    </Stack.Navigator>
  );
};
