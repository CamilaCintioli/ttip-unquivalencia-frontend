import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
import './Nav.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img className="nav-logo" src={Logo} alt="Logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/expediente">
              <h3>Expedientes</h3>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
