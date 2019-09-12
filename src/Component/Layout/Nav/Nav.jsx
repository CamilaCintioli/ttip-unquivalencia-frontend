import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logoGood.png';
import './Nav.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img className="nav-logo" src={Logo} alt="Logo" />
        UNQuivalencias
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
    </nav>
  );
}

export default Nav;
