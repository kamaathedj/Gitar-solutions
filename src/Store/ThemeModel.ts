/* eslint-disable no-param-reassign */
import { action, Action } from 'easy-peasy';

interface Theme {
  primary: string;
  text: string;
  background: string;
  buttonColor: string;
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
  buttonColor: '#ffffff',
};
const light: Theme = {
  primary: '#e2eaebaa',
  text: '#000',
  background: '#fff',
  buttonColor: '#000000',
};
export const ModeData: Mode = {
  mode: dark,
  isDark: false,
  ChangeMode: action((state) => {
    state.mode = state.isDark ? dark : light;
    state.isDark = !state.isDark;
  }),
};
