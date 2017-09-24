import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav
    className="navbar is-danger"
    role="navigation"
    aria-label="main navigation"
  >
    <Link to="/">
      <p className="navbar-item title is-4 has-text-black has-text-weight-bold">
        Hacker News Clone
      </p>
    </Link>
  </nav>
);

export default Navbar;
