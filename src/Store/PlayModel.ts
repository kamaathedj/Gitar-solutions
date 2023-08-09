import { computed, Computed } from 'easy-peasy';
import Broccoli from '../assets/broccoli.svg';
import Avocado from '../assets/avocado.svg';
import Lettuce from '../assets/lettuce.svg';
import Potato from '../assets/potatoes.svg';
import Water from '../assets/water.svg';
import Lemon from '../assets/lemon.svg';
import Avocandos from '../assets/avocados.svg';
import Chilli from '../assets/chilli.svg';

type Info = {
  title: string;
  description: string;
  imageUrl: string;
  done: boolean;
};

export interface PlayModel {
  count: Computed<PlayModel, number>;
  data: Array<Info>;
}
export const PlayData: PlayModel = {
  data: [
    {
      title: 'Java',
      description: 'Java experience 5years',
      imageUrl: Avocado,
      done: true,
    },
    {
      title: 'javascript',
      description: 'javascript experience 8 years',
      imageUrl: Broccoli,
      done: true,
    },
    {
      title: 'python',
      description: 'python experience 3 years',
      imageUrl: Lettuce,
      done: true,
    },
    {
      title: 'Flutter',
      description: 'flutter experience 2 years',
      imageUrl: Potato,
      done: true,
    },
    {
      title: 'Android',
      description: 'Android experience 2years',
      imageUrl: Water,
      done: true,
    },
    {
      title: 'Reactjs',
      description:
        'Reactjs  experience 4 years using both javascript and typescript',
      imageUrl: Lemon,
      done: true,
    },
    {
      title: 'Node js',
      description: 'Nodejs experience 5 years',
      imageUrl: Avocandos,
      done: true,
    },
    {
      title: 'Django + Flask',
      description: 'Django and flask experience 2 years',
      imageUrl: Chilli,
      done: true,
    },
  ],
  count: computed((state) => state.data.length),
};
