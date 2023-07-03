export type ThemeType = typeof light; // This is the type definition for my theme object.

export const light = {
  primary: '#f45511',
  text: '#000',
  background: '#fff',
};
export const dark: ThemeType = {
  primary: '#000000',
  text: '#000fef',
  background: '#e2e2e2',
};

const theme = dark; // set the light theme as the default.
export default theme;
