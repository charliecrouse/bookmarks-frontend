import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { Header, Icon, Image, Table } from 'semantic-ui-react';

import { Bookmark, isFolder } from '../common/bookmarks';
import { useBookmarks } from '../hooks/useBookmarks';
import { setParentId } from '../store/actions/bookmarks';

const BookmarkContent = styled(Table.Cell)``;

export interface BookmarkShape {
  bookmark: Bookmark;
  onFolderClick: (id: number | null) => void;
  onBookmarkClick: (url: string) => void;
}

const BookmarkRow: React.FC<BookmarkShape> = props => {
  const { bookmark } = props;

  const onClick = () => {
    if (isFolder(bookmark)) {
      props.onFolderClick(bookmark.id);
    } else {
      props.onBookmarkClick(bookmark.url || '/');
    }
  };

  const getBookmarkIcon = () => {
    if (isFolder(bookmark)) {
      return <Icon name="folder" size="small" />;
    }

    return <Image rounded size="small" src={`//logo.clearbit.com/${bookmark.url}`} />;
  };

  return (
    <Table.Row>
      <BookmarkContent onClick={onClick}>
        <Header as="h3" image>
          {getBookmarkIcon()}
          <Header.Content>{bookmark.name}</Header.Content>
        </Header>
      </BookmarkContent>
    </Table.Row>
  );
};

export const BookmarksList: React.FC = props => {
  const dispatch = useDispatch();
  const { children } = useBookmarks();

  const onFolderClick = (parentId: number | null) => {
    dispatch(setParentId(parentId));
  };

  const onBookmarkClick = (url: string) => {
    window.location.href = url;
  };

  const rows = children.map(bookmark => {
    return (
      <BookmarkRow
        key={bookmark.id}
        bookmark={bookmark}
        onFolderClick={onFolderClick}
        onBookmarkClick={onBookmarkClick}
      />
    );
  });

  return rows.length ? (
    <>
      <Table celled>
        <Table.Body>{rows}</Table.Body>
      </Table>
    </>
  ) : (
    <> </>
  );
};
