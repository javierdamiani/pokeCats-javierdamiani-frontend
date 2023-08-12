import React from 'react';
import './Preloader.css';
import Pikachu from '../../images/Preloader.gif';

function Preloader() {
  return (
    <div className='preloader'>
      <div className='preloader__circle'>
        <img src={Pikachu} alt='Gif de pikachu corriendo' />
      </div>
    </div>
  );
}

export default Preloader;
