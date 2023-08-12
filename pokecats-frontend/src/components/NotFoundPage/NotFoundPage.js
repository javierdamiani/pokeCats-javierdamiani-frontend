import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className='notfound'>
      <h2 className='notfound__title'>Page Not Found</h2>
      <p className='notfound__text'>La página que estás buscando no existe</p>
      <Link to='/' className='notfound__link'>
        Volver al home
      </Link>
    </div>
  );
}

export default NotFoundPage;
