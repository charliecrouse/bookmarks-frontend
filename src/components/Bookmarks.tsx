import React from 'react';
import { Menu } from 'semantic-ui-react';

import BookmarksBreadcrumbs from './BookmarksBreadcrumbs';
import BookmarksList from './BookmarksList';
import BookmarksGrid from './BookmarksGrid';
import { Bookmark, DISPLAY_VARIANT, sortBookmarks, getChildren } from '../common/bookmarks';

interface BookmarksProps {
  parent: Bookmark | undefined;
  bookmarks: Bookmark[];
  variant: DISPLAY_VARIANT;
  onClick: (bookmark: Bookmark | undefined) => void;
}

const Bookmarks: React.FC<BookmarksProps> = props => {
  const { parent, bookmarks, variant, onClick } = props;

  const children = getChildren(bookmarks, parent?.id || null);
  const sortedChildren = sortBookmarks(children);

  const BookmarksDisplay = variant === DISPLAY_VARIANT.LIST ? BookmarksList : BookmarksGrid;

  return (
    <>
      <Menu borderless secondary>
        <Menu.Item>
          <BookmarksBreadcrumbs parent={parent} bookmarks={bookmarks} onClick={onClick} />
        </Menu.Item>
      </Menu>
      <BookmarksDisplay bookmarks={sortedChildren} onClick={onClick} />
    </>
  );
};

export default Bookmarks;
