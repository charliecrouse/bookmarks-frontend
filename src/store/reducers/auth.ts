import { createSlice } from '@reduxjs/toolkit';

import { AsyncState, defaultAsyncState } from '../common/state';
import { handleActionStart, handleActionError, handleActionSuccess } from '../common/reducers';

export interface StateShape extends AsyncState {
  jwt: string;
}

export const initialState: StateShape = {
  ...defaultAsyncState,
  jwt: '',
};

export interface SignupSuccess {
  jwt: string;
}

export interface SigninSuccess {
  jwt: string;
}

export const { reducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupStart: handleActionStart<StateShape>(),
    signupFailure: handleActionError<StateShape>(),
    signupSuccess: handleActionSuccess<StateShape, SignupSuccess>(),
    signinStart: handleActionStart<StateShape>(),
    signinFailure: handleActionError<StateShape>(),
    signinSuccess: handleActionSuccess<StateShape, SigninSuccess>(),
  },
});
