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
      imageUrl: 'src/assets/avocado.svg',
      done: true,
    },
    {
      title: 'javascript',
      description: 'javascript experience 8 years',
      imageUrl: 'src/assets/broccoli.svg',
      done: true,
    },
    {
      title: 'python',
      description: 'python experience 3 years',
      imageUrl: 'src/assets/lettuce.svg',
      done: true,
    },
    {
      title: 'Android + flutter',
      description: 'javascript experience 2 years',
      imageUrl: 'src/assets/potatoes.svg',
      done: true,
    },
  ],
  count: computed((state) => state.data.length),
};

// export const store = createStore<StoreModel>({
//   data: [
//     {
//       title: 'animal pilgrimage',
//       description: 'it happens in the plains of mara ...',
//       done: true,
//     },
//     {
//       title: 'human population',
//       description: '8 billions of us on a cold rock',
//       done: true,
//     },
//   ],
//   count: computed((state) => state.data.length),
// });
