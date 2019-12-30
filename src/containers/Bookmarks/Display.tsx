import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalStore } from '../../store';
import { fetchBookmarks } from '../../store/actions/bookmarks';

export interface DisplayProps {}

export const Display: React.FC = props => {
  // -----
  // STORE
  // -----
  const { auth, bookmarks } = useSelector((store: GlobalStore) => store);

  // ---------
  // VARIABLES
  // ---------
  const dispatch = useDispatch();

  // -------
  // HELPERS
  // -------

  // -----------
  // REACT HOOKS
  // -----------
  React.useEffect(() => {
    dispatch(fetchBookmarks({ jwt: auth.jwt }));
  }, [dispatch, auth.jwt]);

  // ---------
  // COMPONENT
  // ---------
  return <></>;
};
