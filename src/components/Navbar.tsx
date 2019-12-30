import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

interface NavbarProps {
  isAuthenticated: boolean;
  onSignout: () => void;
}

const Navbar: React.FC<NavbarProps> = props => (
  <Menu attached borderless size="massive">
    <Menu.Item header>Bookmarks</Menu.Item>

    {props.isAuthenticated && (
      <Menu.Menu position="right">
        <Menu.Item>
          <Button basic onClick={props.onSignout} primary>
            Signout
          </Button>
        </Menu.Item>
      </Menu.Menu>
    )}
  </Menu>
);

export default Navbar;
