import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalStore } from './store';
import { loadAuthentication } from './store/actions/auth';

import { AuthForm } from './components/AuthForm';

export const App: React.FC = props => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: GlobalStore) => ({ auth: state.auth }));

  React.useEffect(() => {
    dispatch(loadAuthentication());
  }, [dispatch]);

  return auth.jwt ? (
    <>
      <h1>Authenticated Application</h1>
    </>
  ) : (
    <AuthForm />
  );
};
