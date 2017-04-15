import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './containers/Home';
import Forecast from './containers/Forecast';


const Routes = () => (
  <Router>
    <div className="container">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/forecast/:city" component={Forecast} />

    </div>
  </Router>
);

export default Routes;
