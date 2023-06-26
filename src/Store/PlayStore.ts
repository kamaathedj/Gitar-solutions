import { createStore, computed, Computed } from 'easy-peasy';

type Info = {
  title: string;
  description: string;
  done: boolean;
};

export interface StoreModel {
  count: Computed<StoreModel, number>;
  data: Array<Info>;
}

export const store = createStore<StoreModel>({
  data: [
    {
      title: 'animal pilgrimage',
      description: 'it happens in the plains of mara ...',
      done: true,
    },
  ],
  count: computed((state) => state.data.length),
});
