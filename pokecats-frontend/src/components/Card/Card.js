import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  return (
    <div className='card'>
      <img
        className='card__image'
        src='https://cataas.com/cat?'
        alt={card.name}
      />
      <div className='card__details'>
        <h3 className='card__details-title'>{card.name}</h3>
        <p className='card__details-text'>{card.description}</p>
      </div>
    </div>
  );
};

export default Card;
