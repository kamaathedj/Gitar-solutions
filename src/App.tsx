import './App.css';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routing from './components/Routing';
import { useStoreState } from './hooks/Easy-peasy-hooks';

function App() {
  const { mode } = useStoreState((state) => state.theme);
  return (
    <ThemeProvider theme={mode}>
      <HashRouter>
        <Routing />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
