import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Bookmark, getChildren, sortBookmarks } from '../common/bookmarks';
import { GlobalStore } from '../store';
import { fetchBookmarks, setParent } from '../store/actions/bookmarks';

export const useBookmarks = () => {
  const dispatch = useDispatch();
  const { auth, bookmarks } = useSelector((store: GlobalStore) => store);

  React.useEffect(() => {
    dispatch(fetchBookmarks({ jwt: auth.jwt }));
  }, [dispatch, auth.jwt]);

  const children = sortBookmarks(getChildren(bookmarks.bookmarks, bookmarks.parent?.id ?? null));
  const { parent } = bookmarks;

  const _setParent = (bookmark?: Bookmark) => {
    dispatch(setParent(bookmark));
  };

  return { bookmarks: bookmarks.bookmarks, children, parent, setParent: _setParent };
};
