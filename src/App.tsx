import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalStore } from './store';
import { loadAuthentication } from './store/actions/auth';

import { AuthFormContainer as AuthForm } from './containers/Auth/AuthForm';
import { BookmarksDisplay } from './components/BookmarksDisplay';
import { Layout } from './components/Layout';

export const App: React.FC = props => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: GlobalStore) => ({ auth: state.auth }));

  React.useEffect(() => {
    dispatch(loadAuthentication());
  }, [dispatch]);

  const main = auth.jwt ? <BookmarksDisplay /> : <AuthForm />;
  return <Layout>{main}</Layout>;
};
