import { FC, useState, useMemo, ReactNode } from 'react';
import { ThemeContext } from './context';
import { darkTheme, ligthTheme } from './themes';

interface ThemeProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProps> = ({ children }) => {
  const [actualTheme, setActualTheme] = useState<string>('dark');

  const value = useMemo(
    () => ({
      active: actualTheme,
      theme: actualTheme === 'dark' ? darkTheme : ligthTheme,
      toggleTheme: () => {
        setActualTheme(actualTheme === 'dark' ? 'ligth' : 'dark');
      },
    }),
    [actualTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
