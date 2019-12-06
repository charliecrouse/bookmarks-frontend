import React from 'react';
import { useDispatch } from 'react-redux';

import { signin } from './store/actions/auth';

interface PropShape {}

export const App: React.FC<PropShape> = props => {
  const dispatch = useDispatch();

  const email = 'test@test.com';
  const password = 'password';

  React.useEffect(() => {
    dispatch(signin({ email, password }));
  }, [dispatch]);

  return (
    <>
      <h1>Hello, World!</h1>
    </>
  );
};
