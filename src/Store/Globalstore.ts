import { createStore } from 'easy-peasy';
import { ModeStore } from './ModeStore';
import { store } from './PlayStore';

export const globalModel = {
  theme: ModeStore,
  products: store,
};
export const globalStore = createStore(globalModel);
