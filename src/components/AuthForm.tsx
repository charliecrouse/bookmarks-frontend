import React from 'react';
import { useDispatch } from 'react-redux';

import { signin, signup } from '../store/actions/auth';

export const AuthForm: React.FC = props => {
  const [isSignup, setIsSignup] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const dispatch = useDispatch();

  const getAuthMethod = (isSignup: boolean): string => {
    return isSignup ? 'Signup' : 'Signin';
  };

  const switchAuthMethod = () => {
    setIsSignup(!isSignup);
  };

  const authenticate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup({ email, password }));
    } else {
      dispatch(signin({ email, password }));
    }
  };

  const handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();

    switch (e.currentTarget.name) {
      case 'email':
        return setEmail(e.currentTarget.value);
      case 'password':
        return setPassword(e.currentTarget.value);
      default:
        return;
    }
  };

  return (
    <>
      <h1>{getAuthMethod(isSignup)}</h1>

      <form onSubmit={authenticate} noValidate>
        Email:
        <input type="email" name="email" value={email} onChange={handleInputChange} />
        Password:
        <input type="password" name="password" value={password} onChange={handleInputChange} />
        <button type="submit">{getAuthMethod(isSignup)}</button>
      </form>
      <p>
        Switch to <span onClick={switchAuthMethod}>{getAuthMethod(!isSignup)}</span>
      </p>
    </>
  );
};
