import React from 'react';
import { Link } from 'react-router-dom';

const iconStyle = {
  border: '1.6px solid white'
};
const logoStyle = {
  'fontFamily': 'verdana'
};
const Navbar = () => (
  <nav
    className="navbar is-danger"
    role="navigation"
    aria-label="main navigation"
  >
    <section className="navbar-brand">
      <div className="navbar-item">
        <img
          className="image is-24x24"
          src="http://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png"
          style={iconStyle}
        />
      </div>
      <div className="navbar-item">
        <p
          className="is-size-5 has-text-black has-text-weight-bold"
          style={logoStyle}
        >
          <Link to="/">Hacker News Clone</Link>
        </p>
      </div>
    </section>
  </nav>
);

export default Navbar;
