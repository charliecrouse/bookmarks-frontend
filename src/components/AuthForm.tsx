// External
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

// Components
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

// Internal
import { signin, signup } from '../store/actions/auth';

const AuthSwitch = styled.span`
  :hover {
    border-bottom: 1px solid black;
    cursor: pointer;
  }
`;

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

  const handleInputChange = (setter: any) => (
    e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>,
    value?: string,
  ) => {
    e.preventDefault();
    setter(value);
  };

  return (
    <>
      <Text variant="xxLarge">{getAuthMethod(isSignup)}</Text>

      <form onSubmit={authenticate} noValidate>
        <TextField
          type="email"
          label="Enter your email:"
          placeholder="email"
          value={email}
          onChange={handleInputChange(setEmail)}
        />

        <TextField
          type="password"
          label="Enter your password:"
          placeholder="password"
          value={password}
          onChange={handleInputChange(setPassword)}
        />

        <div style={{ marginTop: '10px', display: 'inline-block' }}>
          <DefaultButton type="submit" text={getAuthMethod(isSignup)} />

          <Text variant="large" style={{ marginLeft: '25px' }}>
            Switch to{' '}
            <AuthSwitch onClick={switchAuthMethod}>{getAuthMethod(!isSignup)}</AuthSwitch>
          </Text>
        </div>
      </form>
    </>
  );
};
