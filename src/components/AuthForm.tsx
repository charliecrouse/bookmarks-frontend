import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Button, ButtonProps, Form, Header } from 'semantic-ui-react';

import { signin, signup } from '../store/actions/auth';

const AuthSwitchText = styled.span`
  color: blue;

  :hover {
    border-bottom: 1px solid blue;
    cursor: pointer;
  }
`;

export const AuthForm: React.FC = props => {
  const dispatch = useDispatch();

  // Signup/Signin
  const [isSignup, setIsSignup] = React.useState<boolean>(false);

  // Form Values
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  // Get the current authentication strategy as a string
  const getAuthMethod = (isSignup: boolean): string => {
    return isSignup ? 'Signup' : 'Signin';
  };

  // Switch between signin/signup
  const switchAuthMethod = () => {
    setIsSignup(!isSignup);
  };

  // Submit form
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: ButtonProps) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup({ email, password }));
    } else {
      dispatch(signin({ email, password }));
    }
  };

  // Update values for the current state of the form
  const handleInputChange = (setter: (value: string) => void) => (
    e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    setter(e.currentTarget.value);
  };

  return (
    <>
      <Header size="huge" textAlign="center">
        {getAuthMethod(isSignup)}
      </Header>

      <Form>
        <Form.Field
          control="input"
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={handleInputChange(setEmail)}
        />

        <Form.Field
          control="input"
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={handleInputChange(setPassword)}
        />

        <Button primary onClick={handleSubmit}>
          {getAuthMethod(isSignup).toUpperCase()}
        </Button>

        <Header size="small">
          Switch to{' '}
          <AuthSwitchText onClick={switchAuthMethod}>
            {getAuthMethod(!isSignup).toLowerCase()}
          </AuthSwitchText>
        </Header>
      </Form>
    </>
  );
};
