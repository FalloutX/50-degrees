import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './containers/Home';


const Routes = () => (
  <Router>
    <div className="container">
      <NavBar />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);

export default Routes;
