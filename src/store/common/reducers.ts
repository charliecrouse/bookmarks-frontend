import produce from 'immer';
import { PayloadAction } from '@reduxjs/toolkit';

import { AsyncState } from '../common/state';

export const handleActionStart = <T extends AsyncState>() =>
  produce((draft: T) => {
    draft.loading = true;
    draft.error = undefined;
  });

export const handleActionFailure = <T extends AsyncState>() =>
  produce((draft: T, action: PayloadAction<Error>) => {
    draft.loading = false;
    draft.error = action.payload;
  });

export const handleActionSuccess = <T extends AsyncState, S>() =>
  produce((draft: T, action: PayloadAction<S>) => {
    draft.loading = false;
    draft.error = undefined;
    Object.assign(draft, action.payload);
  });
