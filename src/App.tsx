import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './navigation';
import { useThemeContext } from './Theme/context';

export const App = () => {
  const { active, theme } = useThemeContext();
  return (
    <PaperProvider theme={theme.paperTheme}>
      <NavigationContainer theme={theme.navigationTheme}>
        <StatusBar
          barStyle={active === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={theme.barStyle}
        />
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
};
