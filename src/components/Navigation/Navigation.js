import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate(); // Obtenemos la función de navegación

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Función para redirigir a la ruta "Contact" al hacer clic en el botón "Contacto"
  const handleContactClick = () => {
    setIsMenuOpen(false); // Cerrar el menú cuando se redirige
    navigate('/contact'); // Redirigir a la ruta "Contact"
  };

  const handleGalleryClick = () => {
    setIsMenuOpen(false); // Cerrar el mené cuando se redirige
    navigate('/gallery'); // Redirigir a la ruta "Gallery"
  };

  const handleHomeClick = () => {
    setIsMenuOpen(false); // Cerrar el mené cuando se redirige
    navigate('/'); // Redirigir a la ruta "Home"
  };

  const handleDonateClick = () => {
    setIsMenuOpen(false); // Cerrar el mené cuando se redirige
    navigate('/donate'); // Redirigir a la ruta "Donate"
  };

  return (
    <div className='navigation' ref={menuRef}>
      <button
        className={`navigation__button ${
          isMenuOpen ? 'navigation__button--open' : ''
        }`}
        onClick={handleMenuToggle}
      >
        <span className='navigation__bar'></span>
        <span className='navigation__bar'></span>
        <span className='navigation__bar'></span>
      </button>

      {isMenuOpen && (
        <div className='navigation__menu'>
          <button className='navigation__menu-item' onClick={handleHomeClick}>
            Home
          </button>
          <button className='navigation__menu-item' onClick={handleDonateClick}>
            Donar
          </button>
          <button
            className='navigation__menu-item'
            onClick={handleGalleryClick}
          >
            Galería
          </button>
          <button
            className='navigation__menu-item'
            onClick={handleContactClick}
          >
            Contacto
          </button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
