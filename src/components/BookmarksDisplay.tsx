import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import { GlobalStore } from '../store';
import { fetchBookmarks } from '../store/actions/bookmarks';

import { BookmarksList } from './BookmarksList';
import { BookmarksBreadcrumb } from './BookmarksBreadcrumb';

export const BookmarksDisplay: React.FC = props => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: GlobalStore) => ({ auth: state.auth }));

  React.useEffect(() => {
    dispatch(fetchBookmarks({ jwt: auth.jwt }));
  }, [dispatch, auth.jwt]);

  return (
    <>
      <Menu borderless>
        <Menu.Item>
          <BookmarksBreadcrumb />
        </Menu.Item>
      </Menu>

      <BookmarksList />
    </>
  );
};
