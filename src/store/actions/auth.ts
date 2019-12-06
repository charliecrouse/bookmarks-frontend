import * as authService from '../../services/auth';
import { Thunk } from '../common/actions';
import { StateShape, actions } from '../reducers/auth';

export const signin = (data: authService.SigninRequest): Thunk<StateShape> => async dispatch => {
  dispatch(actions.signinStart());

  try {
    const res = await authService.signin(data);
    dispatch(actions.signinSuccess(res));
  } catch (err) {
    dispatch(actions.signinFailure(err));
  }
};

export const signup = (data: authService.SignupRequest): Thunk<StateShape> => async dispatch => {
  dispatch(actions.signupStart());

  try {
    const res = await authService.signup(data);
    dispatch(actions.signinSuccess(res));
  } catch (err) {
    dispatch(actions.signupFailure(err));
  }
};
