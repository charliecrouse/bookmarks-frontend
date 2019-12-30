import * as yup from 'yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { AuthForm, AuthFormProps } from '../../components/Auth/AuthForm';
import { signup, signin } from '../../store/actions/auth';

export const AuthFormSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required()
    .min(5),
});

export const AuthFormContainer: React.FC = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);

  const switchAuthMethod = () => {
    setIsSignup(!isSignup);
  };

  const { handleSubmit, control, errors } = useForm({
    validationSchema: AuthFormSchema,
  });

  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    if (isSignup) {
      dispatch(signup(data));
    } else {
      dispatch(signin(data));
    }
  };

  const props: AuthFormProps = {
    isSignup,
    switchAuthMethod,
    control,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };

  return <AuthForm {...props} />;
};
