import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <dev>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Travel
          </Link>
        </div>
      </nav>
    </dev>
  )
}

export default Navbar;