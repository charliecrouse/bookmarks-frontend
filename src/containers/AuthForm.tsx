import React from 'react';
import { useDispatch } from 'react-redux';

import AuthForm from '../components/AuthForm';
import { FormData } from '../common/forms';
import { SignupRequest, SigninRequest } from '../services/auth';
import { signup, signin } from '../store/actions/auth';

export default function AuthFormContainer() {
  const [isSignup, setIsSignup] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const onSubmit = (data: FormData) => {
    if (isSignup) {
      return dispatch(signup(data as SignupRequest));
    } else {
      dispatch(signin(data as SigninRequest));
    }
  };

  const onSwitch = () => {
    setIsSignup(!isSignup);
  };

  const props = {
    isSignup,
    onSubmit,
    onSwitch,
  };

  return <AuthForm {...props} />;
}
