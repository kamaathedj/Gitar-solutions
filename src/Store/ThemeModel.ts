/* eslint-disable no-param-reassign */
import { action, Action } from 'easy-peasy';

interface Theme {
  primary: string;
  text: string;
  background: string;
  buttonColor: string;
  cardColor: string;
}
export interface Mode {
  mode: Theme;
  isDark: boolean;
  ChangeMode: Action<Mode, Theme | undefined>;
}
const dark: Theme = {
  primary: '#253441',
  text: '#fdfdfd',
  background: '#e2e2e2',
  buttonColor: '#ffffff',
  cardColor: '#253441',
};
const light: Theme = {
  primary: '#e2eaeb',
  text: '#395268',
  background: '#fff',
  buttonColor: '#f9f9f9',
  cardColor: 'rgba(255, 255, 255, 0.8)',
};
export const ModeData: Mode = {
  mode: light,
  isDark: false,
  ChangeMode: action((state) => {
    state.mode = state.isDark ? light : dark;
    state.isDark = !state.isDark;
  }),
};
