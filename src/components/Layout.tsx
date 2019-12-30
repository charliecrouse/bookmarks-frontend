import React from 'react';
import styled from 'styled-components';

import Navbar from '../containers/Navbar';

// -----------------
// STYLED COMPONENTS
// -----------------
const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
`

const StyledMain = styled.div`
  margin: 10%;
`;

// --------------
// MAIN COMPONENT
// --------------
const Layout: React.FC = (props) => (
  <StyledContainer>
    <Navbar />

    <StyledMain>
      {' :-) '}
      {props.children}
    </StyledMain>
  </StyledContainer>
);

export default Layout;
