import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { Button, Header, Icon, Image, Table } from 'semantic-ui-react';

import { Bookmark, isFolder } from '../common/bookmarks';
import { useBookmarks } from '../hooks/useBookmarks';
import { setParentId, deleteBookmark, updateBookmark } from '../store/actions/bookmarks';
import { BookmarkModal } from './BookmarkModal';
import { GlobalStore } from '../store';

export interface BookmarkShape {
  bookmark: Bookmark;
  onFolderClick: (id: number | null) => void;
  onBookmarkClick: (url: string) => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const StyledBookmarkRow = styled(Table.Row)`
  :hover {
    cursor: pointer;
  }
`;

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
    <StyledBookmarkRow>
      <Table.Cell onClick={onClick} style={{ width: '100%' }}>
        <Header as="h3" image>
          {getBookmarkIcon()}
          <Header.Content>{bookmark.name}</Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell textAlign="right">
        <Button basic color="blue" icon="edit" onClick={props.onEditClick} />
      </Table.Cell>
      <Table.Cell textAlign="right">
        <Button basic color="red" icon="delete" onClick={props.onDeleteClick} />
      </Table.Cell>
    </StyledBookmarkRow>
  );
};

export const BookmarksList: React.FC = props => {
  const [editActive, setEditActive] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const { children } = useBookmarks();
  const { auth } = useSelector((store: GlobalStore) => store);

  const onFolderClick = (parentId: number | null) => {
    dispatch(setParentId(parentId));
  };

  const onBookmarkClick = (url: string) => {
    window.location.href = url;
  };

  const handleEdit = (bookmark: Bookmark, values: Partial<Bookmark>) => {
    const name = values.name || bookmark.name;
    const url = values.url || bookmark.url;
    dispatch(updateBookmark({ jwt: auth.jwt, bookmark: { ...bookmark, name, url } }));
    setEditActive(false);
  };

  const handleDelete = (bookmark: Bookmark) => {
    dispatch(deleteBookmark({ jwt: auth.jwt, bookmark }));
  };

  const rows = children.map(bookmark => {
    return (
      <React.Fragment key={bookmark.id}>
        <BookmarkModal
          active={editActive}
          handleClose={() => setEditActive(false)}
          name={bookmark.name}
          url={bookmark.url}
          handleSubmit={(values: Partial<Bookmark>) => handleEdit(bookmark, values)}
        />
        <BookmarkRow
          key={bookmark.id}
          bookmark={bookmark}
          onFolderClick={onFolderClick}
          onBookmarkClick={onBookmarkClick}
          onEditClick={() => setEditActive(true)}
          onDeleteClick={() => handleDelete(bookmark)}
        />
      </React.Fragment>
    );
  });

  return rows.length ? (
    <>
      <Table celled collapsing>
        <Table.Body>{rows}</Table.Body>
      </Table>
    </>
  ) : (
    <> </>
  );
};
