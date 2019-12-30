import React from 'react';
import { Link, Switch, Redirect, Route } from 'react-router-dom';

import Layout from '../components/Layout';

const AnonymousApp: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/signup">
          You are at Signup
          <Link to="/signin">Signin</Link>
        </Route>

        <Route exact path="/signin">
          You are at Signin
          <Link to="/signup">Signup</Link>
        </Route>

        <Redirect to="/signin" />
      </Switch>
    </Layout>
  );
}

export default AnonymousApp;
