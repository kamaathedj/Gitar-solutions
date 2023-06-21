import { createStore, computed, Computed } from 'easy-peasy';

type Info = {
  title: string;
  description: string;
  done: boolean;
};

interface StoreModel {
  done: Computed<StoreModel, Info[]>;
  data: Array<Info>;
}

const store = createStore<StoreModel>({
  data: [],
  done: computed((state) => state.data.filter((m) => m.done)),
});

export default store;
