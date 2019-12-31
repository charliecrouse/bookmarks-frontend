import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Bookmarks from '../components/Bookmarks';
import { Bookmark, findBookmarkById, DISPLAY_VARIANT, isFolder } from '../common/bookmarks';
import { useQuery } from '../hooks/useQuery';
import { GlobalStore } from '../store';
import { fetchBookmarks } from '../store/actions/bookmarks';

export default function BookmarksContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();

  const { auth, bookmarks } = useSelector((store: GlobalStore) => ({ auth: store.auth, bookmarks: store.bookmarks }));

  React.useEffect(() => {
    dispatch(fetchBookmarks({ jwt: auth.jwt }));
  }, [dispatch, auth.jwt]);

  const parent = findBookmarkById(bookmarks.bookmarks, parseInt(query.get('parent') || '-1'));

  const setParent = (id: number | null) => {
    history.push({
      pathname: '/',
      search: '?' + new URLSearchParams({ parent: id?.toString() || '' }),
    });
  };

  const onClick = (bookmark: Bookmark | undefined) => {
    if (!bookmark || isFolder(bookmark)) {
      setParent(bookmark?.id || null);
    } else {
      window.location.href = bookmark.url || '/';
    }
  };

  const props = {
    parent,
    onClick,
    bookmarks: bookmarks.bookmarks,
    variant: DISPLAY_VARIANT.LIST,
  };

  return <Bookmarks {...props} />;
}
