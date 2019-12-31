import * as authService from '../../services/auth';
import { Thunk } from '../common/actions';
import { StateShape, actions, initialState } from '../reducers/auth';

// -----------
// API ACTIONS
// -----------
export const signup = (data: authService.SignupRequest): Thunk<StateShape> => async dispatch => {
  dispatch(actions.signupStart());

  try {
    const res = await authService.signup(data);
    dispatch(actions.signinSuccess(res));
  } catch (err) {
    dispatch(actions.signupFailure(err));
  }
};

export const signin = (data: authService.SigninRequest): Thunk<StateShape> => async dispatch => {
  dispatch(actions.signinStart());

  try {
    const res = await authService.signin(data);
    dispatch(actions.signinSuccess(res));
  } catch (err) {
    dispatch(actions.signinFailure(err));
  }
};

// --------------
// CLIENT ACTIONS
// --------------
export const loadAuthentication = (): Thunk<StateShape> => async dispatch => {
  dispatch(actions.loadAuthenticationStart());
  const jwt = window.localStorage.getItem('jwt');

  if (jwt) {
    dispatch(actions.loadAuthenticationSuccess({ jwt }));
  } else {
    dispatch(actions.loadAuthenticationSuccess({ jwt: '' }));
  }
};

export const signout = (): Thunk<StateShape> => async dispatch => {
  dispatch(actions.signoutStart());
  try {
    dispatch(actions.signoutSuccess(initialState));

    // Clear global store
    window.location.href = '/';

    // Clear persisted state
    window.localStorage.removeItem('jwt');
    window.localStorage.removeItem('parent');
  } catch (err) {
    dispatch(actions.signoutFailure(err));
  }
};
