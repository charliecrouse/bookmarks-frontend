import { ActionFailure, ActionSuccess } from '../actions/types/shared';

export interface AsyncStateShape {
  loading: boolean;
  error: Error | undefined;
}

export const handleActionStart = (state: AsyncStateShape): AsyncStateShape => {
  return { ...state, loading: true, error: undefined };
};

export const handleActionFailure = (
  state: AsyncStateShape,
  action: ActionFailure,
): AsyncStateShape => {
  return { ...state, loading: false, error: action.error };
};

export const handleActionSuccess = (
  state: AsyncStateShape,
  action: ActionSuccess,
): AsyncStateShape => {
  return { ...state, loading: false, error: undefined };
};
