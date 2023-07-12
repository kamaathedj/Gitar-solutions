import { createStore } from 'easy-peasy';
import { ModeData, Mode } from './ThemeModel';
import { PlayData, PlayModel } from './PlayModel';
import { About, AboutMe } from './AboutMe';

export interface GlobalTypes {
  theme: Mode;
  products: PlayModel;
  me: About;
}
export const globalModel: GlobalTypes = {
  theme: ModeData,
  products: PlayData,
  me: AboutMe,
};
export const globalStore = createStore(globalModel);
