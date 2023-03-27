import { LogBox } from 'react-native';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { App } from './src/App';
import { ThemeProvider } from './src/Theme';
import { apiSlice } from './src/api/apiSlice';

LogBox.ignoreLogs(['ViewPropTypes']);

function Main(): JSX.Element {
  return (
    <ApiProvider api={apiSlice}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ApiProvider>
  );
}

export default Main;
