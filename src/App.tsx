import './App.css';
import { HashRouter } from 'react-router-dom';
import { useStoreActions, useStoreState } from './hooks/Easy-peasy-hooks';
import Header from './components/Header';
import Routing from './components/Routing';

function App() {
  return (
    <HashRouter>
      <Routing />
    </HashRouter>
  );
}

export default App;
