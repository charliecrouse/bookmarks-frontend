import React from 'react';

import Layout from './Layout';
import AuthForm from './AuthForm';

const AnonymousApp: React.FC = () => {
  return (
    <Layout>
      <AuthForm />
    </Layout>
  );
};

export default AnonymousApp;
