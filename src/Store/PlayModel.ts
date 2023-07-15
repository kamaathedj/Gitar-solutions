import { computed, Computed } from 'easy-peasy';

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
      imageUrl: 'assets/avocado.svg',
      done: true,
    },
    {
      title: 'javascript',
      description: 'javascript experience 8 years',
      imageUrl: 'assets/broccoli.svg',
      done: true,
    },
    {
      title: 'python',
      description: 'python experience 3 years',
      imageUrl: 'assets/lettuce.svg',
      done: true,
    },
    {
      title: 'Flutter',
      description: 'javascript experience 2 years',
      imageUrl: 'assets/potatoes.svg',
      done: true,
    },
    {
      title: 'Android',
      description: 'Android experience 2years',
      imageUrl: 'assets/water.svg',
      done: true,
    },
    {
      title: 'Reactjs',
      description: 'javascript experience 4 years',
      imageUrl: 'assets/lemon.svg',
      done: true,
    },
    {
      title: 'Node js',
      description: 'python experience 5 years',
      imageUrl: 'assets/avocados.svg',
      done: true,
    },
    {
      title: 'Django + Flask',
      description: 'javascript experience 2 years',
      imageUrl: 'assets/chilli.svg',
      done: true,
    },
  ],
  count: computed((state) => state.data.length),
};
