/* eslint-disable no-param-reassign */
import { createStore, action, Action } from 'easy-peasy';

interface Theme {
  primary: string;
  text: string;
  background: string;
}
export interface Mode {
  mode: Theme;
  ChangeMode: Action<Mode, Theme | undefined>;
}
const dark: Theme = {
  primary: '#000000',
  text: '#000fef',
  background: '#e2e2e2',
};
const light: Theme = {
  primary: '#f45511',
  text: '#000',
  background: '#fff',
};
export const ModeStore = createStore<Mode>({
  mode: dark,
  ChangeMode: action((state) => {
    state.mode = Math.random() > 0.5 ? light : dark;
  }),
});

export type ThemeType = typeof light;
const theme = dark; // set the light theme as the default.
export default theme;
