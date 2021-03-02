import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from '../header';
import Ground from '../ground';
import {GROUND_ROUTE} from '../../utils/routes';

const Home = () => {
  return (
    <div style={{height: '100vh'}}>
      <Header />
      <div>
        <Switch>
          <Route exact path={GROUND_ROUTE} component={Ground} />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
