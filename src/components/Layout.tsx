import React from 'react';
import styled from 'styled-components';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

import Navbar from '../containers/Navbar';
import { useAppStatus } from '../hooks/useAppStatus';

const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
`;

const StyledMain = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2.5%;
`;

const Layout: React.FC = props => {
  const { error, loading } = useAppStatus();

  return (
    <StyledContainer>
      <Navbar />
      <>
        <Dimmer active={loading}>
          <Loader size="massive" />
        </Dimmer>

        <StyledMain>
          {error && (
            <Segment inverted color="red" secondary>
              {error.message || error}
            </Segment>
          )}
          {props.children}
        </StyledMain>
      </>
    </StyledContainer>
  );
};

export default Layout;
