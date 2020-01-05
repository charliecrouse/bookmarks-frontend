import React from 'react';
import { Header, Icon, Table } from 'semantic-ui-react';

import { BookmarkListItemHeader } from './Styled';
import { Bookmark, isFolder } from '../../common/bookmarks';

interface BookmarkListItem {
  bookmark: Bookmark;
  onClick: (bookmark: Bookmark) => void;
}

export const BookmarkListItem: React.FC<BookmarkListItem> = props => {
  const { bookmark, onClick } = props;
  const iconName = isFolder(bookmark) ? 'folder' : 'bookmark';

  return (
    <Table.Row>
      <BookmarkListItemHeader onClick={() => onClick(bookmark)}>
        <Header image>
          <Icon name={iconName} size="small" />
          <Header.Content>{bookmark.name}</Header.Content>
        </Header>
      </BookmarkListItemHeader>
    </Table.Row>
  );
};
