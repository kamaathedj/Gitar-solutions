import { createStore } from 'easy-peasy';
import { ModeData, Mode } from './ThemeModel';
import { PlayData, PlayModel } from './PlayModel';

export interface GlobalTypes {
  theme: Mode;
  products: PlayModel;
}
export const globalModel: GlobalTypes = {
  theme: ModeData,
  products: PlayData,
};
export const globalStore = createStore(globalModel);
