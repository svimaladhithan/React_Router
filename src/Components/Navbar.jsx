import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
  <div className="container-fluid">
    <Link to='/' className='title'>Guvi</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/fullstack'>FULL STACK DEVELOPMENT</Link>
        </li>
        <li className="nav-item">
        <Link to='/datascience'>DATA SCIENCE</Link>
        </li>
        <li className="nav-item">
        <Link to='/cybersecurity'>CYBER SECURITY</Link>
        </li>
        <li className="nav-item">
        <Link to='/career'>CAREER</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;