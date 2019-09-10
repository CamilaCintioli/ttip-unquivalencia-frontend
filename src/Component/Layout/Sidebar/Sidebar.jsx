import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-full bg-inverse">
        <button type="button" className="navbar-toggler" onClick="ToogleNavbar()">&#9776;</button>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-md-2 sidebar sidebar-left" id="Navbar">
            <ul className="nav nav-sidebar">
              <li className="active">
                <Link to="/expediente">
                  <span className="icon-holder">
                    <i className="fa fa-archive" />
                  </span>
                  <span className="title">Expedientess</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2">\</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
