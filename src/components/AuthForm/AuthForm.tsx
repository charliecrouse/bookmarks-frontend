import React from 'react';
import * as yup from 'yup';
import { Controller, ErrorMessage, useForm } from 'react-hook-form';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

import { AuthFormSwitcher } from './Styled';
import { FormData } from '../../common/forms';

interface AuthForm {
  isSignup: boolean;
  onSwitch: () => void;
  onSubmit: (data: FormData) => void;
}

export const AuthForm: React.FC<AuthForm> = props => {
  const { isSignup, onSwitch, onSubmit } = props;
  const { control, errors, handleSubmit } = useForm({
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email()
        .required(),
      password: yup
        .string()
        .required()
        .min(5),
    }),
  });

  return (
    <>
      <Header as="h1" textAlign="center">
        {isSignup ? 'Signup' : 'Signin'}
      </Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          as={<Form.Field control="input" label="Email" placeholder="Enter your email" type="email" />}
        />

        <Controller
          name="password"
          control={control}
          as={<Form.Field control="input" label="Password" placeholder="Enter your password" type="password" />}
        />

        <Button basic secondary type="submit">
          {isSignup ? 'SIGNUP' : 'SIGNIN'}
        </Button>
      </Form>

      <ErrorMessage name="email" errors={errors} as={<Segment inverted color="red" secondary />} />
      <ErrorMessage name="password" errors={errors} as={<Segment inverted color="red" secondary />} />

      <Header as="h3" textAlign="center">
        Switch to <AuthFormSwitcher onClick={onSwitch}>{isSignup ? 'signin' : 'signup'}</AuthFormSwitcher>
      </Header>
    </>
  );
};
