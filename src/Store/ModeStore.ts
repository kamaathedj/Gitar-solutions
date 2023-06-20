import { createStore } from 'easy-peasy';

interface Dark {
  text_color: string;
  background_coolor: string;
}
interface Light {
  text_color: string;
}
interface Mode {
  mode: Light | Dark;
}
const ModeStore = createStore<Mode>({
  mode: { text_color: 'fefefe', background_coolor: 'fefe' },
});

export default ModeStore;
