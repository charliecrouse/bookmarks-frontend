import React from 'react';

import Layout from '../components/Layout';
import AuthForm from './AuthForm';

const AnonymousApp: React.FC = () => {
  return (
    <Layout>
      <AuthForm />
    </Layout>
  );
};

export default AnonymousApp;
