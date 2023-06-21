import { createTypedHooks } from 'easy-peasy';
import { Mode } from '../Store/ModeStore';

const typedHooks = createTypedHooks<Mode>();

export const { useStoreActions } = typedHooks;
// export const { useStoreDispatch } = typedHooks;
export const { useStoreState } = typedHooks;
