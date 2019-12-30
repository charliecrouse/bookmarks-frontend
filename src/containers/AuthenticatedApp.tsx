import React from 'react';
import { Link, Switch, Redirect, Route } from 'react-router-dom'

import Layout from '../components/Layout';

const AuthenticatedApp: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          Authenticated
        <Link to="/signout">signout</Link>
        </Route>

        <Route exact path="/signout">
          Signing out...
      </Route>

        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default AuthenticatedApp;
