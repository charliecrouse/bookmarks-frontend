import React from 'react';
import * as _ from 'lodash';
import { Breadcrumb } from 'semantic-ui-react';

import { BookmarkBreadcrumbsItem } from './BookmarkBreadcrumbsItem';
import { Bookmark, getParents } from '../../common/bookmarks';

interface BookmarkBreadcrumbs {
  parent?: Bookmark;
  bookmarks: Bookmark[];
  onClick: (bookmark?: Bookmark) => void;
}

export const BookmarkBreadcrumbs: React.FC<BookmarkBreadcrumbs> = props => {
  const { parent, bookmarks, onClick } = props;
  const parents = _.reverse(getParents(bookmarks, parent?.id || null));

  return (
    <Breadcrumb size="large">
      {/* Home folder */}
      <BookmarkBreadcrumbsItem onClick={onClick} />

      {parents.map((bookmark: Bookmark) => (
        <BookmarkBreadcrumbsItem key={bookmark.id} bookmark={bookmark} onClick={onClick} />
      ))}
    </Breadcrumb>
  );
};
