import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container allign">
        <div className="centermenu">
          <img className="logo" src="./src/images/logo.PNG" alt="Logo" style={{ height: 70 }} />
          <a className="navbar-brand text-white" href="/">ArgiXR DASHBOARD ANALYTICS</a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/sessions">Sessions</a>
              <span></span>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/graphs">Graphs</a>
              <span></span>

            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/main_images">Main Images</a>
              <span></span>

            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/managment">Managment</a>
              <span></span>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
