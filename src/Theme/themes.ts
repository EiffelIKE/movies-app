import { MD2LightTheme, MD2DarkTheme } from 'react-native-paper';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import type { Theme } from './types';

MD2LightTheme.colors.primary = '#034b3d';
MD2DarkTheme.colors.primary = '#1ae1f2';
MD2DarkTheme.colors.accent = '#1ae1f2';

DarkTheme.colors.background = '#192734';
DarkTheme.colors.card = '#15212b';

export const darkTheme: Theme = {
  paperTheme: MD2DarkTheme,
  navigationTheme: DarkTheme,
  barStyle: '#15212b',
  buttons: '#375166',
  ratingColor: '#ffc205',
  ratingBGColor: '#192734',
};

export const ligthTheme: Theme = {
  paperTheme: MD2LightTheme,
  navigationTheme: DefaultTheme,
  barStyle: '#ffffff',
  buttons: '#8697a5',
  ratingColor: '#ffc205',
  ratingBGColor: '#f0f0f0',
};
