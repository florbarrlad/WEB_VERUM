import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from '../header';
import Ground from '../ground';
import HomeContent from '../homeContent';
import {GROUND_ROUTE, HOME_ROUTE} from '../../utils/routes';

const Home = () => {
  return (
    <div style={{height: '100vh'}}>
      <Header />
      <div style={{paddingTop: 60}} />
      <>
        <Switch>
          <Route exact path={HOME_ROUTE} component={HomeContent} />
          <Route exact path={GROUND_ROUTE} component={Ground} />
        </Switch>
      </>
    </div>
  );
};

export default Home;
