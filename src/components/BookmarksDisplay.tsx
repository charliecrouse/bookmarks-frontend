import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalStore } from '../store';
import { fetchBookmarks } from '../store/actions/bookmarks';

export const BookmarksDisplay: React.FC = props => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: GlobalStore) => ({ auth: state.auth }));

  React.useEffect(() => {
    dispatch(fetchBookmarks({ jwt: auth.jwt }));
  }, [dispatch]);

  return <>Bookmarks Display</>;
};
