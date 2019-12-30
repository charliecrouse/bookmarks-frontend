import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navbar, NavbarProps } from '../components/Navbar';
import { GlobalStore } from '../store';
import { signout } from '../store/actions/auth';

export const NavbarContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store: GlobalStore) => ({ auth: store.auth }));

  const isAuthenticated = !!auth.jwt;

  const onSignout = () => {
    dispatch(signout());
  };

  const props: NavbarProps = {
    isAuthenticated,
    onSignout,
  };

  return <Navbar {...props} />;
};
