import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Layout1 from './components/Layout1';

function AppRoutes() {

  return (
    <HashRouter basename={'/4u-ui'}>
      <Switch>
        <Route exact path={'/one'}>
          <Layout1 />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default AppRoutes;