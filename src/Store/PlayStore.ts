import { createStore, computed, Computed } from 'easy-peasy';

type Info = {
  title: string;
  description: string;
  done: boolean;
};

interface StoreModel {
  count: Computed<StoreModel, number>;
  data: Array<Info>;
}

const store = createStore<StoreModel>({
  data: [],
  count: computed((state) => state.data.length),
});

export default store;
