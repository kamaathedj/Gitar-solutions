import { createStore } from 'easy-peasy';

type Info = {
  title: string;
  description: string;
};

interface StoreModel {
  count: number;
  data?: Array<Info>;
}

const store = createStore<StoreModel>({
  data: [
    {
      title: 'my title',
      description: 'my description',
    },
  ],
  count: 0,
});

export default store;
