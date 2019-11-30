import * as shared from './shared';
import { StateShape } from '../../reducers/auth';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export interface SignupStart extends shared.ActionStart {
  type: typeof SIGNUP_START;
}

export interface SignupFailure extends shared.ActionFailure {
  type: typeof SIGNUP_FAILURE;
}

export interface SignupSuccess extends shared.ActionSuccess {
  type: typeof SIGNUP_SUCCESS;
  data: StateShape;
}

export const SIGNIN_START = 'SIGNIN_START';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';

export interface SigninStart extends shared.ActionStart {
  type: typeof SIGNIN_START;
}

export interface SigninFailure extends shared.ActionFailure {
  type: typeof SIGNIN_FAILURE;
}

export interface SigninSuccess extends shared.ActionSuccess {
  type: typeof SIGNIN_SUCCESS;
  data: {
    jwt: string;
  };
}

export type ActionTypes =
  | SignupStart
  | SignupFailure
  | SignupSuccess
  | SigninStart
  | SigninFailure
  | SigninSuccess;
