import React from 'react';

import { Bookmark } from '../common/bookmarks';

interface BookmarksGridProps {
  bookmarks: Bookmark[];
  onClick: (bookmark: Bookmark) => void;
}

const BookmarksGrid: React.FC<BookmarksGridProps> = props => {
  const { bookmarks } = props;

  return (
    <>
      <h1>Bookmarks Grid</h1>
    </>
  );
};

export default BookmarksGrid;
