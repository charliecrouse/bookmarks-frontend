import React from 'react';
import * as _ from 'lodash';
import { Breadcrumb } from 'semantic-ui-react';

import BookmarksBreadcrumbsItem from './BookmarksBreadcrumbsItem';
import { Bookmark, getParents } from '../common/bookmarks';

interface BookmarksBreadcrumbsProps {
  parent: Bookmark | undefined;
  bookmarks: Bookmark[];
  onClick: (bookmark?: Bookmark) => void;
}

const BookmarksBreadcrumbs: React.FC<BookmarksBreadcrumbsProps> = props => {
  const { parent, bookmarks, onClick } = props;
  const parents = _.reverse(getParents(bookmarks, parent?.id || null));

  return (
    <Breadcrumb size="massive">
      <BookmarksBreadcrumbsItem onClick={onClick} />

      {parents.map((bookmark: Bookmark) => (
        <BookmarksBreadcrumbsItem key={bookmark.id} bookmark={bookmark} onClick={onClick} />
      ))}
    </Breadcrumb>
  );
};

export default BookmarksBreadcrumbs;
