import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

export interface NavbarProps {
  isAuthenticated: boolean;
  onSignout: () => void;
}

export const Navbar: React.FC<NavbarProps> = props => {
  const { isAuthenticated, onSignout } = props;
  return (
    <>
      <Menu attached borderless size="massive">
        <Menu.Item header>Bookmarks</Menu.Item>

        {isAuthenticated && (
          <Menu.Menu position="right">
            <Menu.Item>
              <Button basic onClick={onSignout} primary>
                Signout
              </Button>
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    </>
  );
};
