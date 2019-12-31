import React from 'react';

import Layout from './Layout';
import Bookmarks from './Bookmarks';

const AuthenticatedApp: React.FC = () => {
  return (
    <Layout>
      <Bookmarks />
    </Layout>
  );
};

export default AuthenticatedApp;
