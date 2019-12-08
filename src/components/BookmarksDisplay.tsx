import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon, Menu } from 'semantic-ui-react';

import { BookmarksBreadcrumb } from './BookmarksBreadcrumb';
import { BookmarksGrid } from './BookmarksGrid';
import { BookmarksList } from './BookmarksList';
import { BookmarkViews } from '../common/bookmarks';
import { GlobalStore } from '../store';
import { fetchBookmarks, setView } from '../store/actions/bookmarks';

export const BookmarksDisplay: React.FC = props => {
  const dispatch = useDispatch();
  const { auth, bookmarks } = useSelector((store: GlobalStore) => store);

  React.useEffect(() => {
    dispatch(fetchBookmarks({ jwt: auth.jwt }));
  }, [dispatch, auth.jwt]);

  const onClick = (view: string) => {
    dispatch(setView(view));
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
              <Button
                icon
                onClick={() => onClick(BookmarkViews.LIST)}
                disabled={view === BookmarkViews.LIST}
              >
                <Icon name="list" />
              </Button>
              <Button
                icon
                onClick={() => onClick(BookmarkViews.GRID)}
                disabled={view === BookmarkViews.GRID}
              >
                <Icon name="grid layout" />
              </Button>
            </Button.Group>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      {bookmarkView}
    </>
  );
};
