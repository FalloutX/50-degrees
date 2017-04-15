import React from 'react';
import { NavLink } from 'react-router-dom';
import WeatherForm from './WeatherForm';

const NavBar = () => (
  <div className="navbar">
    <ul className="nav">
      <li>
        <NavLink to="/" exact
          activeClassName="active-navlink">
          50°
        </NavLink>
      </li>
      <li>
        <NavLink to="/cities"
          activeClassName="active-navlink">
          Cities
        </NavLink>
      </li>
    </ul>
    <div className="navbar-form-container">
      <WeatherForm isSmall
        className="navbar-form"
        />
    </div>
  </div>
);


export default NavBar;
