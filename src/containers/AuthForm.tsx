import React from 'react';
import { useDispatch } from 'react-redux';

import AuthForm from '../components/AuthForm';
import { FormData } from '../common/forms';
import { signup, signin } from '../store/actions/auth';

export default function AuthFormContainer() {
  const [isSignup, setIsSignup] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const onSubmit = (data: FormData) => {
    const payload = {
      email: data.email,
      password: data.password,
    };

    if (isSignup) {
      dispatch(signup(payload));
    } else {
      dispatch(signin(payload));
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
