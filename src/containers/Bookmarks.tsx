import React from 'react';

import Bookmarks from '../components/Bookmarks';
import { Bookmark, isFolder, DISPLAY_VARIANT } from '../common/bookmarks';
import { useBookmarks } from '../hooks/useBookmarks';

export default function BookmarksContainer() {
  const { bookmarks, children, parent, setParent } = useBookmarks();

  const onClick = (bookmark?: Bookmark) => {
    if (!bookmark || isFolder(bookmark)) {
      setParent(bookmark);
    } else {
      window.location.href = bookmark.url ?? '/';
    }
  };

  const props = {
    bookmarks,
    children,
    parent,
    onClick,
    variant: DISPLAY_VARIANT.LIST,
  };

  return <Bookmarks {...props} />;
}
