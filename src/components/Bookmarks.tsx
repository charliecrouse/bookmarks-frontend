import React from 'react';
import { Menu } from 'semantic-ui-react';

import BookmarksBreadcrumbs from './BookmarksBreadcrumbs';
import BookmarksList from './BookmarksList';
import BookmarksGrid from './BookmarksGrid';
import { Bookmark, DISPLAY_VARIANT } from '../common/bookmarks';

interface BookmarksProps {
  bookmarks: Bookmark[];
  parent?: Bookmark;
  children: Bookmark[];
  variant: DISPLAY_VARIANT;
  onClick: (bookmark?: Bookmark) => void;
}

const Bookmarks: React.FC<BookmarksProps> = props => {
  const { bookmarks, parent, children, variant, onClick } = props;

  const BookmarksDisplay = variant === DISPLAY_VARIANT.LIST ? BookmarksList : BookmarksGrid;

  return (
    <>
      <Menu borderless secondary>
        <Menu.Item>
          <BookmarksBreadcrumbs parent={parent} bookmarks={bookmarks} onClick={onClick} />
        </Menu.Item>
      </Menu>

      <BookmarksDisplay bookmarks={children} onClick={onClick} />
    </>
  );
};

export default Bookmarks;
