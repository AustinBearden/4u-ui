import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import UseLayout1 from './components/UseLayout1';

function AppRoutes() {

  return (
    <HashRouter basename={'/4u-ui'}>
      <Switch>
        <Route exact path={'/one'}>
          <UseLayout1 />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default AppRoutes;