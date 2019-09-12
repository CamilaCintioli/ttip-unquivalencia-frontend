import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <nav className=" col-2 bg-light nav flex-column">
      <Link className="nav-link active" to="/expediente">
        <span className="icon-holder">
          <i className="fa fa-archive" />
        </span>
        <span className="title">Expediente</span>
      </Link>
      <Link className="nav-link" to="/solicitud/new">
        <h3>Cargar Solicitud</h3>
      </Link>
    </nav>
  );
}

export default Sidebar;
