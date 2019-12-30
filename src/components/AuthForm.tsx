import React from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { Controller, ErrorMessage, useForm } from 'react-hook-form';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

import { FormData } from '../common/forms';

const StyledSwitcher = styled.span`
  color: blue;
  :hover {
    border-bottom: 1px solid blue;
    cursor: pointer;
  }
`

interface AuthFormProps {
  isSignup: boolean;
  onSwitch: () => void;
  onSubmit: (data: FormData) => void;
}

const AuthForm: React.FC<AuthFormProps> = (props) => {
  const { isSignup, onSwitch, onSubmit } = props;
  const { control, errors, handleSubmit } = useForm({
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required().min(5),
    })
  });

  return (
    <>
      <Header>{isSignup ? 'Signup' : 'Signin'}</Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          as={
            <Form.Field control="input" label="Email" placeholder="Enter your email" type="email" />
          }
        />

        <Controller
          name="password"
          control={control}
          as={
            <Form.Field control="input" label="Password" placeholder="Enter your password" type="password" />
          }
        />

        <Button basic type="submit">
          {isSignup ? 'SIGNUP' : 'SIGNIN'}
        </Button>
      </Form>

      <ErrorMessage
        name="email"
        errors={errors}
        as={
          <Segment inverted color="red" secondary />
        }
      />

      <ErrorMessage
        name="password"
        errors={errors}
        as={
          <Segment inverted color="red" secondary />
        }
      />

      <Header>
        Switch to{' '}
        <StyledSwitcher onClick={onSwitch}>
          {isSignup ? 'signin' : 'signup'}
        </StyledSwitcher>
      </Header>
    </>
  );
}

export default AuthForm;
