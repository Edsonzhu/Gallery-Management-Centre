import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            Gallery
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <Link to="/users" className="navbar-brand">
            Users
          </Link>
          <Link to="/albums" className="navbar-brand">
            Albums
          </Link>
          <Link to="/photos" className="navbar-brand">
            Photos
          </Link>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <Link to="#" className="navbar-brand">
            <span className="glyphicon glyphicon-user"></span> Sign Up
          </Link>
          <Link to="#" className="navbar-brand">
            <span className="glyphicon glyphicon-log-in"></span> Login
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;