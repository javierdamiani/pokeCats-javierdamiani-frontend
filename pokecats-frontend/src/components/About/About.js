import React from 'react';
import './About.css';
import aboutImgOne from '../../images/AboutImgOne.svg';

function About() {
  return (
    <div className='about'>
      <img className='about__img' src={aboutImgOne} alt='Un gatito durmiendo' />
      <div className='about__content'>
        <h2 className='about__content-title'>Bienvenido a PokeCats!</h2>
        <p className='about__content-text'>
          Nuestra casa ha reunido a un grupo de voluntarios que quieren
          contribuir a cambiar la situación de los gatitos sin hogar en nuestro
          distrito. ¡Ven, te estamos esperando!
        </p>
        <button className='about__content-button'>¡Únete!</button>
      </div>
    </div>
  );
}

export default About;
