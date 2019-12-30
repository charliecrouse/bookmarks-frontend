import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AnonymousApp from './containers/AnonymousApp';
import AuthenticatedApp from './containers/AuthenticatedApp';
import { GlobalStore } from './store';
import { loadAuthentication } from './store/actions/auth';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: GlobalStore) => ({ auth: state.auth }));

  React.useEffect(() => {
    dispatch(loadAuthentication());
  }, [dispatch]);

  return <>{auth.jwt ? <AuthenticatedApp /> : <AnonymousApp />}</>
};
