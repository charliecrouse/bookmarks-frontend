import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Bookmarks from '../components/Bookmarks';
import { Bookmark, isFolder, DISPLAY_VARIANT } from '../common/bookmarks';
import { useBookmarks } from '../hooks/useBookmarks';
import { GlobalStore } from '../store';
import { deleteBookmark } from '../store/actions/bookmarks';

export default function BookmarksContainer() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store: GlobalStore) => store);
  const { bookmarks, children, parent, setParent } = useBookmarks();

  const onClick = (bookmark?: Bookmark) => {
    if (!bookmark || isFolder(bookmark)) {
      setParent(bookmark);
    } else {
      window.location.href = bookmark.url ?? '/';
    }
  };

  const onDeleteBookmark = (bookmark: Bookmark) => {
    const payload = {
      jwt: auth.jwt,
      bookmark,
    };
    dispatch(deleteBookmark(payload));
  };

  const props = {
    bookmarks,
    children,
    parent,
    onClick,
    onDeleteBookmark,
    variant: DISPLAY_VARIANT.LIST,
  };

  return <Bookmarks {...props} />;
}
