import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Menu } from 'semantic-ui-react';

import { GlobalStore } from '../store';
import { signout } from '../store/actions/auth';

export const Navbar: React.FC = props => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store: GlobalStore) => ({ auth: store.auth }));

  const handleSignout = () => {
    dispatch(signout());
  };

  return (
    <>
      <Menu attached borderless size="massive">
        <Menu.Item header>Bookmarks</Menu.Item>

        {auth.jwt && (
          <Menu.Menu position="right">
            <Menu.Item>
              <Button basic onClick={handleSignout} primary>
                Signout
              </Button>
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    </>
  );
};
