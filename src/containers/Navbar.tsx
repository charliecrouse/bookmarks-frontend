import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../components/Navbar';
import { GlobalStore } from '../store';
import { signout } from '../store/actions/auth';

export default () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store: GlobalStore) => ({ auth: store.auth }));

  const onSignout = () => {
    dispatch(signout());
  }

  const props = {
    isAuthenticated: !!auth.jwt,
    onSignout,
  }

  return <Navbar {...props} />;
}
