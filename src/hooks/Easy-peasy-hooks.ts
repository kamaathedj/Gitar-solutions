import { createTypedHooks } from 'easy-peasy';
import { StoreModel } from '../Store/PlayStore';

const typedHooks = createTypedHooks<StoreModel>();

export const { useStoreActions } = typedHooks;
// export const { useStoreDispatch } = typedHooks;
export const { useStoreState } = typedHooks;
