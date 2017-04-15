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
  </div>
);


export default NavBar;
