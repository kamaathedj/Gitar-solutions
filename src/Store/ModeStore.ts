/* eslint-disable no-param-reassign */
import { createStore, action, Action } from 'easy-peasy';

interface Theme {
  text_color: string;
  background_color: string;
}
interface Mode {
  mode: Theme;
  ChangeMode: Action<Mode, Theme>;
}
const dark: Theme = {
  text_color: '#000000',
  background_color: '#121212',
};
const light: Theme = {
  text_color: '#fefefe',
  background_color: '#12dceb',
};
const ModeStore = createStore<Mode>({
  mode: dark,
  ChangeMode: action((state) => {
    state.mode = Math.random() > 0.5 ? light : dark;
  }),
});

export default ModeStore;
