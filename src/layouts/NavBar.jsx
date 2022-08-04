import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light fixed-top">
        <div className="container-xxl">
          <Link to="/">
            <img src={Logo} alt="Pokemon" className="img-fluid w-50" />
          </Link>
          {/*//? toggle button for mobile nav  */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/*//? navbar links */}
          <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pokemon">
                  Pokemon
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutme">
                  About Me
                </Link>
              </li>
              <li className="nav-item d-md-none">
                <a href="#intro" className="nav-link">
                  Get Started
                </a>
              </li>
              <li className="nav-item ms-2 d-none d-md-inline">
                <a href="#intro" className="btn btn-primary">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
