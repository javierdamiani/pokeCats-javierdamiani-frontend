import React from 'react';
import './Presentation.css';
import PresentationImg from '../../images/PresentationImg.jpg';
import { Link } from 'react-router-dom';

function Presentation() {
  return (
    <div className='presentation'>
      <div className='presentation__content'>
        <h2 className='presentation__content-title'>Gotta Catch ’Em All</h2>
        <h3 className='presentation__content-subtitle'>
          ¡Estos PokeCats necesitan amor y cuidado!
        </h3>
        <p className='presentation__content-text'>
          Más de 40 gatitos esperan a que una persona con un corazón grande y
          bondadoso venga a llevárselos a casa. Dales la oportunidad de
          convertirse en animales queridos.
        </p>
        <div className='presentation__content-buttons'>
          <Link
            to='/donate'
            className='presentation__content-button presentation__content-button--purple'
          >
            Donar
          </Link>
          <Link
            to='donate'
            className='presentation__content-button presentation__content-button--red'
          >
            Adoptar
          </Link>
        </div>
      </div>
      <img
        className='presentation__img'
        src={PresentationImg}
        alt='Imagen de un gatito con gafas de sol esperando ser adoptado'
      />
    </div>
  );
}

export default Presentation;
