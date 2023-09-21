import React from 'react';
import './Cats.css';
import Card from '../Card/Card'; // Importamos el componente Card
import cardsData from '../../vendor/Cards.json'; // Importamos los datos de las cartas

function Cats() {
  return (
    <div className='cats'>
      <h2 className='cats__title'>Los PokeCats están esperando por ti</h2>
      <div className='cats__container'>
        {cardsData.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Cats;
