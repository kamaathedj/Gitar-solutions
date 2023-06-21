import './App.css';
import { useStoreActions, useStoreState } from './hooks/Easy-peasy-hooks';
import Header from './components/Header';

function App() {
  const store = useStoreState((state) => state.mode);
  const ChangeMode = useStoreActions((actions) => actions.ChangeMode);

  const handleClick = (e: any) => {
    e.preventDefault();
    ChangeMode(undefined);
  };

  return (
    <div>
      <Header />
      {/* <button type="button" onClick={handleClick}>
        change Mode
      </button>
      <h5>{JSON.stringify(store)}</h5> */}
    </div>
  );
}

export default App;
