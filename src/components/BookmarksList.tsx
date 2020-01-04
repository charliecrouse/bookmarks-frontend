import React from 'react';
import { Header, Table } from 'semantic-ui-react';

import BookmarksListItem from './BookmarksListItem';
import { Bookmark } from '../common/bookmarks';

interface BookmarksListProps {
  bookmarks: Bookmark[];
  onClick: (bookmark: Bookmark) => void;
}

const BookmarksList: React.FC<BookmarksListProps> = props => {
  const { bookmarks, onClick } = props;

  return (
    <Table>
      <Table.Body>
        {bookmarks.map(bookmark => (
          <BookmarksListItem key={bookmark.id} bookmark={bookmark} onClick={onClick} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default BookmarksList;
