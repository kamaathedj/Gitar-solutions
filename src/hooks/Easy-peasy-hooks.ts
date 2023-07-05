import { createTypedHooks } from 'easy-peasy';
import { GlobalTypes } from '../Store/Globalstore';

const typedHooks = createTypedHooks<GlobalTypes>();

export const { useStoreActions } = typedHooks;
// export const { useStoreDispatch } = typedHooks;
export const { useStoreState } = typedHooks;
