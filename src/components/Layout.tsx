import React from 'react';
import styled from 'styled-components';

import { Dimmer, Loader, Segment } from 'semantic-ui-react';

import { Navbar } from './Navbar';
import { useAppStatus } from '../hooks/useAppStatus';

const Reset = styled.div`
  margin: 0;
  padding: 0;
`;

const Main = styled.div`
  margin-top: 2.5%;
  margin-left: 10%;
  margin-right: 10%;
`;

export const Layout: React.FC = props => {
  const { loading, error } = useAppStatus();

  return (
    <Reset>
      <Navbar />
      <>
        <Dimmer active={loading}>
          <Loader size="massive" />
        </Dimmer>

        <Main>
          {error && (
            <Segment inverted color="red" secondary>
              {error.message || error}
            </Segment>
          )}
          {props.children}
        </Main>
      </>
    </Reset>
  );
};
