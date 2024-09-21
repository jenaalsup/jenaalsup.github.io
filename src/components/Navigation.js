import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">home</NavLink></li>
        <li><NavLink to="/projects">projects</NavLink></li>
        <li><NavLink to="/misc">misc</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;