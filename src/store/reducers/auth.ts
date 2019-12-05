import * as shared from './shared';
import * as authTypes from '../actions/types/auth';

export interface StateShape extends shared.AsyncStateShape {
  jwt: string;
}

const initialState = {
  jwt: '',
  loading: false,
  error: undefined,
};

export const handleSignupSuccess = (
  state: StateShape,
  action: authTypes.SignupSuccess,
): StateShape => {
  return { ...shared.handleActionSuccess(state, action), jwt: action.data.jwt || '' };
};

export const handleSigninSuccess = (
  state: StateShape,
  action: authTypes.SigninSuccess,
): StateShape => {
  return { ...shared.handleActionSuccess(state, action), jwt: action.data.jwt || '' };
};

export const reducer = (
  state: StateShape = initialState,
  action: authTypes.ActionTypes,
): StateShape => {
  switch (action.type) {
    case authTypes.SIGNIN_START:
    case authTypes.SIGNUP_START:
      return shared.handleActionStart(state) as StateShape;
    case authTypes.SIGNIN_FAILURE:
    case authTypes.SIGNUP_FAILURE:
      return shared.handleActionFailure(state, action) as StateShape;
    case authTypes.SIGNIN_SUCCESS:
      return handleSigninSuccess(state, action as authTypes.SigninSuccess);
    case authTypes.SIGNUP_SUCCESS:
      return handleSignupSuccess(state, action as authTypes.SignupSuccess);
    default:
      return state;
  }
};
