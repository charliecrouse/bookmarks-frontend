import { createSlice } from '@reduxjs/toolkit';

import * as authService from '../../services/auth';
import { AsyncState, defaultAsyncState } from '../common/state';
import { handleActionStart, handleActionFailure, handleActionSuccess } from '../common/reducers';

export interface StateShape extends AsyncState {
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
    signupFailure: handleActionFailure<StateShape>(),
    signupSuccess: handleActionSuccess<StateShape, authService.SignupResponse>(),
    signinStart: handleActionStart<StateShape>(),
    signinFailure: handleActionFailure<StateShape>(),
    signinSuccess: handleActionSuccess<StateShape, authService.SigninResponse>(),
    signoutStart: handleActionStart<StateShape>(),
    signoutFailure: handleActionFailure<StateShape>(),
    signoutSuccess: handleActionSuccess<StateShape, authService.SigninResponse>(),
    loadAuthenticationStart: handleActionStart<StateShape>(),
    loadAuthenticationFailure: handleActionFailure<StateShape>(),
    loadAuthenticationSuccess: handleActionSuccess<StateShape, authService.SigninResponse>(),
  },
});
