import { computed, Computed } from 'easy-peasy';

type Info = {
  title: string;
  description: string;
  done: boolean;
};

export interface PlayModel {
  count: Computed<PlayModel, number>;
  data: Array<Info>;
}
export const PlayData: PlayModel = {
  data: [
    {
      title: 'animal pilgrimage',
      description: 'it happens in the plains of mara ...',
      done: true,
    },
    {
      title: 'human population',
      description: '8 billions of us on a cold rock',
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
