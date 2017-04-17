import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './containers/Home';
import Forecast from './containers/Forecast';
import Detail from './containers/Detail';
import NotFound from './containers/NotFound';


const Routes = () => (
  <Router>
    <div className="container">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/forecast/:city" component={Forecast} />
        <Route path="/detail/:city" component={Detail} />
        <Route component={NotFound} />
      </Switch>


    </div>
  </Router>
);

export default Routes;
