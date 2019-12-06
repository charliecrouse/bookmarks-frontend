import { createSlice } from '@reduxjs/toolkit';

import { AsyncState, defaultAsyncState } from '../common/state';
import { handleActionStart, handleActionError, handleActionSuccess } from '../common/reducers';

export interface StateShape extends AsyncState {
  jwt: string;
}

export interface SigninSuccess {
  jwt: string;
}

export const initialState: StateShape = {
  ...defaultAsyncState,
  jwt: '',
};

export const { reducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupStart: handleActionStart<StateShape>(),
    signupFailure: handleActionError<StateShape>(),
    signupSuccess: handleActionSuccess<StateShape, SigninSuccess>(),
    signinStart: handleActionStart<StateShape>(),
    signinFailure: handleActionError<StateShape>(),
    signinSuccess: handleActionSuccess<StateShape, SigninSuccess>(),
  },
});
