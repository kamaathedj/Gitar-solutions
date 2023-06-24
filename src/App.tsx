import './App.css';
import { HashRouter } from 'react-router-dom';
import { useStoreActions, useStoreState } from './hooks/Easy-peasy-hooks';
import Header from './components/Header';
import Routing from './components/Routing';

function App() {
  const store = useStoreState((state) => state.mode);
  const ChangeMode = useStoreActions((actions) => actions.ChangeMode);

  const handleClick = (e: any) => {
    e.preventDefault();
    ChangeMode(undefined);
  };

  return (
    <HashRouter>
      <Header name="Gitar solutions">logo here .........</Header>
      <Routing />
    </HashRouter>
  );
}

export default App;
