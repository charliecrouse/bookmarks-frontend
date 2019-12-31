import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

interface NavbarProps {
  isAuthenticated: boolean;
  onSignout: () => void;
}

const Navbar: React.FC<NavbarProps> = props => {
  const { isAuthenticated, onSignout } = props;

  return (
    <Menu attached borderless>
      <Menu.Item header as="h2">
        Bookmarks
      </Menu.Item>

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
  );
};

export default Navbar;
