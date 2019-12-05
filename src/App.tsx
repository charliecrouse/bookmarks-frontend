import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalState } from './store';
import { signin } from './store/actions/auth';

interface PropShape {}

export const App: React.FC<PropShape> = props => {
  const dispatch = useDispatch();

  useSelector((state: GlobalState) => ({
    auth: state.auth,
    bookmarks: state.bookmarks,
  }));

  const email: string = 'test@test.com';
  const password: string = 'password';

  React.useEffect(() => {
    dispatch(signin({ email, password }));
  }, [dispatch]);

  return (
    <>
      <h1>Hello, World!</h1>
    </>
  );
};
