import React from 'react';
import { Button, Menu, Modal } from 'semantic-ui-react';

import BookmarkBreadcrumbs from '../BookmarkBreadcrumbs';
import BookmarkForm from '../../containers/BookmarkForm';
import { Bookmark, DISPLAY_VARIANT } from '../../common/bookmarks';
import { getComponentFromVariant } from './helpers';

interface Bookmarks {
  bookmarks: Bookmark[];
  parent?: Bookmark;
  children: Bookmark[];
  variant: DISPLAY_VARIANT;
  onClick: (bookmark?: Bookmark) => void;
  onDeleteBookmark: (bookmark: Bookmark) => void;
}

export const Bookmarks: React.FC<Bookmarks> = props => {
  const { bookmarks, parent, children, variant, onClick, onDeleteBookmark } = props;

  const [open, setOpen] = React.useState<boolean>(false);

  const BookmarksDisplay = getComponentFromVariant(variant);

  return (
    <>
      <Menu borderless secondary>
        <Menu.Item>
          <BookmarkBreadcrumbs bookmarks={bookmarks} parent={parent} onClick={onClick} />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Button.Group>
              <Button icon="plus" onClick={() => setOpen(true)} />
            </Button.Group>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <BookmarksDisplay bookmarks={children} onClick={onClick} onDeleteBookmark={onDeleteBookmark} />

      <Modal open={open} onClose={() => setOpen(false)} closeIcon>
        <Modal.Content>
          <BookmarkForm afterSubmit={() => setOpen(false)} />
        </Modal.Content>
      </Modal>
    </>
  );
};
