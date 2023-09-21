import React from 'react';
import './Contact.css';
import Pokecats from '../../images/PokeCats.svg';
import Home from '../../images/Home.svg';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className='contact'>
      <img className='contact__img' src={Pokecats} alt='Logo de los PokeCats' />
      <div className='contact__details'>
        <h2 className='contact__details-title'>Contáctanos</h2>
        <p className='contact__details-text'>
          Puedes encontrarnos en el correo pokecats@pokecats.org o en WhatsApp
          +51 999 999 999
        </p>
        <Link to='/' className='contact__button'>
          <img
            src={Home}
            alt='Logo de casa para volver a la página principal'
          />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
