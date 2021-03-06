import React from 'react';
import { Table } from 'semantic-ui-react';

import { BookmarkListItem } from './BookmarkListItem';
import { Bookmark } from '../../common/bookmarks';

interface BookmarkList {
  bookmarks: Bookmark[];
  onClick: (bookmark: Bookmark) => void;
  onDeleteBookmark: (bookmark: Bookmark) => void;
}

export const BookmarkList: React.FC<BookmarkList> = props => {
  const { bookmarks, onClick, onDeleteBookmark } = props;

  return (
    <Table>
      <Table.Body>
        {bookmarks.map(bookmark => (
          <BookmarkListItem key={bookmark.id} bookmark={bookmark} onClick={onClick} onDeleteBookmark={onDeleteBookmark} />
        ))}
      </Table.Body>
    </Table>
  );
};
