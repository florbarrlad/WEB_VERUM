import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './modules/login';
import Home from './modules/home';
import {LOGIN_ROUTE, HOME_ROUTE} from './utils/routes';

function App() {
  return (
    <Switch>
      <Route exact path={LOGIN_ROUTE} component={Login} />
      <Route exact path={HOME_ROUTE} component={Home} />
    </Switch>
  );
}

export default App;
