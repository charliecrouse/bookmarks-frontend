import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Bookmark, sortBookmarks, getChildren } from '../common/bookmarks';
import { GlobalStore } from '../store';
import { fetchBookmarks, setParent } from '../store/actions/bookmarks';

export const useBookmarks = () => {
  const dispatch = useDispatch();

  const { auth, bookmarks } = useSelector((store: GlobalStore) => store);
  const { parent } = bookmarks;

  React.useEffect(() => {
    dispatch(fetchBookmarks({ jwt: auth.jwt }));
  }, [dispatch, auth.jwt]);

  const children = getChildren(bookmarks.bookmarks, bookmarks.parent?.id ?? null);
  const sortedChildren = sortBookmarks(children);

  const _setParent = (bookmark?: Bookmark) => {
    dispatch(setParent(bookmark));
  };

  return { parent, bookmarks: bookmarks.bookmarks, children: sortedChildren, setParent: _setParent };
};
