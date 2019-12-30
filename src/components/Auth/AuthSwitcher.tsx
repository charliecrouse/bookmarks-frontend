import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const StyledAuthMethod = styled.span`
  color: blue;

  :hover {
    border-bottom: 1px solid blue;
    cursor: pointer;
  }
`;

export interface AuthSwitcherProps {
  isSignup: boolean;
  onSwitch: () => void;
}

export const AuthSwitcher: React.FC<AuthSwitcherProps> = props => {
  const { isSignup, onSwitch } = props;

  return (
    <Header>
      Switch to{' '}
      <StyledAuthMethod onClick={onSwitch}>{isSignup ? 'signin' : 'signup'}</StyledAuthMethod>
    </Header>
  );
};
