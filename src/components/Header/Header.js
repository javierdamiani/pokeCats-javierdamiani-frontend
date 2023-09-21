import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/PokeCats.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to='/' className='header__logo-link'>
          <img
            className='header__logo-link-img'
            src={logo}
            alt='Logo de PokeCats'
          />
        </Link>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
