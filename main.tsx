import { App } from './src/App';
import { ThemeProvider } from './src/Theme';

function Main(): JSX.Element {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Main;
