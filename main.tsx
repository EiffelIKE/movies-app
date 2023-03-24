import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { App } from './src/App';

function Main(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default Main;
