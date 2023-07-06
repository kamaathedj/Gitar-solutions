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
  primary: '#253441',
  text: '#000fef',
  background: '#e2e2e2',
  buttonColor: '#ffffff',
};
const light: Theme = {
  primary: '#e2eaeb',
  text: '#000',
  background: '#fff',
  buttonColor: '#f9f9f9',
};
export const ModeData: Mode = {
  mode: dark,
  isDark: false,
  ChangeMode: action((state) => {
    state.mode = state.isDark ? dark : light;
    state.isDark = !state.isDark;
  }),
};
