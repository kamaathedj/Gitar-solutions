import { createTypedHooks } from 'easy-peasy';
import { StoreModel } from '../Store/PlayStore';
import { globalModel } from '../Store/Globalstore';

const typedHooks = createTypedHooks<typeof globalModel>();

export const { useStoreActions } = typedHooks;
// export const { useStoreDispatch } = typedHooks;
export const { useStoreState } = typedHooks;
