import React from 'react';
import { Button, Header, Icon, Modal, Table } from 'semantic-ui-react';

import BookmarkForm from '../../containers/BookmarkForm';
import { BookmarkListItemHeader } from './Styled';
import { Bookmark, isFolder } from '../../common/bookmarks';

interface BookmarkListItem {
  bookmark: Bookmark;
  onClick: (bookmark: Bookmark) => void;
  onDeleteBookmark: (bookmark: Bookmark) => void;
}

export const BookmarkListItem: React.FC<BookmarkListItem> = props => {
  const { bookmark, onClick, onDeleteBookmark } = props;
  const iconName = isFolder(bookmark) ? 'folder' : 'bookmark';
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Table.Row>
        <BookmarkListItemHeader onClick={() => onClick(bookmark)}>
          <Header image>
            <Icon name={iconName} size="small" />
            <Header.Content>{bookmark.name}</Header.Content>
          </Header>
        </BookmarkListItemHeader>
        <Table.Cell textAlign="right" collapsing>
          <Button basic color="blue" icon="edit" onClick={() => setOpen(true)} />
        </Table.Cell>
        <Table.Cell textAlign="right" collapsing>
          <Button basic color="red" icon="delete" onClick={() => onDeleteBookmark(bookmark)} />
        </Table.Cell>
      </Table.Row>

      <Modal open={open} onClose={() => setOpen(false)} closeIcon>
        <Modal.Content>
          <BookmarkForm bookmark={bookmark} afterSubmit={() => setOpen(false)} />
        </Modal.Content>
      </Modal>
    </>
  );
};
