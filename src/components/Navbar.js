import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  const closeMobileMenu = () => {
    setClick(false);
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Travel
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'bi-x-lg' : 'bi-list'} />
          </div>
          <ul className={click ? 'nav-menu acvite' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
