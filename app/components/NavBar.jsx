import React from 'react';
import { NavLink } from 'react-router-dom';

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
      <form className="navbar-form">
        <input type="text" placeholder="Eg: St.George, Utah"/>

        <button type="submit" className="button is-small">Get Weather</button>
      </form>
    </div>
  </div>
);


export default NavBar;
