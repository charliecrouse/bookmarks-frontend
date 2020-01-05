import React from 'react';
import { Menu } from 'semantic-ui-react';

import BookmarkBreadcrumbs from '../BookmarkBreadcrumbs';
import { Bookmark, DISPLAY_VARIANT } from '../../common/bookmarks';
import { getComponentFromVariant } from './helpers';

interface Bookmarks {
  bookmarks: Bookmark[];
  parent?: Bookmark;
  children: Bookmark[];
  variant: DISPLAY_VARIANT;
  onClick: (bookmark?: Bookmark) => void;
}

export const Bookmarks: React.FC<Bookmarks> = props => {
  const { bookmarks, parent, children, variant, onClick } = props;

  const BookmarksDisplay = getComponentFromVariant(variant);

  return (
    <>
      <Menu borderless secondary>
        <Menu.Item>
          <BookmarkBreadcrumbs bookmarks={bookmarks} parent={parent} onClick={onClick} />
        </Menu.Item>
      </Menu>
      <BookmarksDisplay bookmarks={children} onClick={onClick} />
    </>
  );
};
