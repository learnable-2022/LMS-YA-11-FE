import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Landing() {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  };

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink to="/student" style={({ isActive }) => (isActive ? activeStyles : null)}>
          Student
        </NavLink>
        <NavLink to="/instructor" style={({ isActive }) => (isActive ? activeStyles : null)}>
          Tutor
        </NavLink>
      </nav>
    </header>
  );
}
