import React from 'react';
import { Controller } from 'react-hook-form';
import { Button, Form, Header } from 'semantic-ui-react';

import { AuthSwitcher } from './AuthSwitcher';

export interface AuthFormProps {
  isSignup: boolean;
  switchAuthMethod: () => void;
  control: any;
  errors: any;
  onSubmit: any;
}

export const AuthForm: React.FC<AuthFormProps> = props => {
  const { isSignup, onSubmit, control, errors } = props;

  // Form fields
  const Email = (
    <Form.Field control="input" label="Email" placeholder="Enter your email" type="email" />
  );

  const Password = (
    <Form.Field
      control="input"
      label="Password"
      placeholder="Enter your password"
      type="password"
    />
  );

  console.log(errors);

  return (
    <>
      <Header size="huge" textAlign="center">
        {isSignup ? 'Signup' : 'Signin'}
      </Header>

      <Form onSubmit={onSubmit}>
        <Controller name="email" as={Email} control={control} />

        <Controller name="password" as={Password} control={control} />

        <Button primary type="submit">
          {isSignup ? 'SIGNUP' : 'SIGNIN'}
        </Button>
      </Form>

      <AuthSwitcher isSignup={isSignup} onSwitch={props.switchAuthMethod} />
    </>
  );
};
