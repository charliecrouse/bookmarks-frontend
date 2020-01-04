import React from 'react';
import styled from 'styled-components';
import { Header, Icon, Table } from 'semantic-ui-react';

import { isFolder, Bookmark } from '../common/bookmarks';

const StyledBookmarkHeader = styled(Table.Cell)`
  :hover {
    cursor: pointer;
  }
`;

interface BookmarksListItemProps {
  bookmark: Bookmark;
  onClick: (bookmark: Bookmark) => void;
}

const BookmarksListItem: React.FC<BookmarksListItemProps> = props => {
  const { bookmark, onClick } = props;

  return (
    <Table.Row>
      <StyledBookmarkHeader onClick={() => onClick(bookmark)}>
        <Header image>
          <Icon name={isFolder(bookmark) ? 'folder outline' : 'bookmark outline'} size="mini" />
          <Header.Content>{bookmark.name}</Header.Content>
        </Header>
      </StyledBookmarkHeader>
    </Table.Row>
  );
};

export default BookmarksListItem;
