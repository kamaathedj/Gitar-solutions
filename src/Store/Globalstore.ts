import { createStore } from 'easy-peasy';
import { ModeStore } from './ModeStore';
import { store } from './PlayStore';

const globalModel = {
  ModeStore,
  store,
};
const globalStore = createStore(globalModel);

export default globalStore;
