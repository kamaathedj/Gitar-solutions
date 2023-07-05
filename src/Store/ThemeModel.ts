/* eslint-disable no-param-reassign */
import { action, Action } from 'easy-peasy';

interface Theme {
  primary: string;
  text: string;
  background: string;
}
export interface Mode {
  mode: Theme;
  isDark: boolean;
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
export const ModeData: Mode = {
  mode: dark,
  isDark: false,
  ChangeMode: action((state) => {
    state.mode = state.isDark ? light : dark;
    state.isDark = !state.isDark;
  }),
};
