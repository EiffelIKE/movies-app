import { MD2Theme, MD3Theme } from 'react-native-paper';
import type { Theme as NavigationTheme } from '@react-navigation/native';

export interface Theme {
  paperTheme: MD2Theme | MD3Theme;
  navigationTheme: NavigationTheme;
  barStyle: string;
  buttons: string;
}

export interface ThemeContextKeys {
  active: string;
  theme: Theme;
  toggleTheme: () => void;
}
