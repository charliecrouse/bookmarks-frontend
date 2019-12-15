import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon, Menu } from 'semantic-ui-react';

import { BookmarkModal } from './BookmarkModal';
import { BookmarksBreadcrumb } from './BookmarksBreadcrumb';
import { BookmarksGrid } from './BookmarksGrid';
import { BookmarksList } from './BookmarksList';
import { GlobalStore } from '../store';
import { Bookmark, BookmarkViews } from '../common/bookmarks';
import { fetchBookmarks, setView, createBookmark } from '../store/actions/bookmarks';

export const BookmarksDisplay: React.FC = props => {
  const dispatch = useDispatch();
  const { auth, bookmarks } = useSelector((store: GlobalStore) => store);

  const [createActive, setCreateActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    dispatch(fetchBookmarks({ jwt: auth.jwt }));
  }, [dispatch, auth.jwt]);

  const onClick = (view: string) => {
    dispatch(setView(view));
  };

  const handleCreate = (values: Partial<Bookmark>) => {
    const bookmark = {
      name: values.name as string,
      url: values.url,
      parent: bookmarks.parentId,
    };
    dispatch(createBookmark({ jwt: auth.jwt, bookmark }));
    setCreateActive(false);
  };

  const view = bookmarks.view;

  const bookmarkView = view === BookmarkViews.LIST ? <BookmarksList /> : <BookmarksGrid />;

  return (
    <>
      <Menu borderless secondary>
        <Menu.Item>
          <BookmarksBreadcrumb />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Button.Group>
              <Button icon="plus" onClick={() => setCreateActive(true)} />
            </Button.Group>
          </Menu.Item>
          <Menu.Item>
            <Button.Group>
              <Button
                icon="list"
                onClick={() => onClick(BookmarkViews.LIST)}
                disabled={view === BookmarkViews.LIST}
              />
              <Button
                icon="grid layout"
                onClick={() => onClick(BookmarkViews.GRID)}
                disabled={view === BookmarkViews.GRID}
              />
            </Button.Group>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <BookmarkModal
        active={createActive}
        handleClose={() => setCreateActive(false)}
        handleSubmit={handleCreate}
      />

      {bookmarkView}
    </>
  );
};
