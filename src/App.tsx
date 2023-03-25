import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './navigation';

export const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar />
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
};
