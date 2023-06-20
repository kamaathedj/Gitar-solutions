import { useStoreActions, Actions, action } from 'easy-peasy';
import './App.css';
import ModeStore from './Store/ModeStore';
import store from './Store/PlayStore';

function App() {
  const ChangeMode = useStoreActions(
    (actions: Actions<typeof ModeStore>) => actions.ChangeMode
  );

  return (
    <div>
      <button type="submit" onClick={ChangeMode}>
        change Mode
      </button>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
