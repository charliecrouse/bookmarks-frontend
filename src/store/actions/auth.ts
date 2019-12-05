import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as authTypes from './types/auth';
import * as authService from '../../services/auth';

export const signupStart = (): authTypes.SignupStart => ({
  type: authTypes.SIGNUP_START,
});

export const signupFailure = (error: Error): authTypes.SignupFailure => ({
  type: authTypes.SIGNUP_FAILURE,
  error,
});

export const signupSuccess = (data: authService.SignupResponse): authTypes.SigninSuccess => ({
  type: authTypes.SIGNIN_SUCCESS,
  data,
});

export const signup = (
  data: authService.SignupRequest,
): ThunkAction<void, authTypes.SignupSuccess, null, Action<string>> => async dispatch => {
  dispatch(signupStart());

  try {
    const res = await authService.signup(data);
    dispatch(signupSuccess(res));
  } catch (err) {
    dispatch(signupFailure(err));
  }
};

export const signinStart = (): authTypes.SigninStart => ({
  type: authTypes.SIGNIN_START,
});

export const signinFailure = (error: Error): authTypes.SigninFailure => ({
  type: authTypes.SIGNIN_FAILURE,
  error,
});

export const signinSuccess = (data: authService.SigninResponse): authTypes.SigninSuccess => ({
  type: authTypes.SIGNIN_SUCCESS,
  data,
});

export const signin = (
  data: authService.SigninRequest,
): ThunkAction<void, authTypes.SigninSuccess, null, Action<string>> => async dispatch => {
  dispatch(signinStart());

  try {
    const res = await authService.signin(data);
    dispatch(signinSuccess(res));
  } catch (err) {
    dispatch(signinFailure(err));
  }
};
