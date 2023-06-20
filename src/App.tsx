import { useStoreActions, Actions, useStoreState, State } from 'easy-peasy';
import './App.css';
import ModeStore from './Store/ModeStore';

function App() {
  const store = useStoreState((state: State<typeof ModeStore>) => state.mode);
  const ChangeMode = useStoreActions(
    (actions: Actions<typeof ModeStore>) => actions.ChangeMode
  );

  return (
    <div>
      <button type="button" onClick={ChangeMode}>
        change Mode
      </button>
      <h5>{JSON.stringify(store)}</h5>
    </div>
  );
}

export default App;
