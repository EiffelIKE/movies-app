import { createContext, useContext } from 'react';
import type { ThemeContextKeys } from './types';
import { darkTheme } from './themes';

const initialTheme: ThemeContextKeys = {
  active: 'dark',
  theme: darkTheme,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextKeys>(initialTheme);

export const useThemeContext = () => {
  const { active, theme, toggleTheme } = useContext(ThemeContext);
  return { active, theme, toggleTheme };
};
