import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { background } from '../../utils/BackgroundByType';
import { fetchPokemonList, fetchPokemonType } from '../../utils/PokeApi';
import Preloader from '../Preloader/Preloader';

function Gallery() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [visibleImages, setVisibleImages] = useState(3);

  useEffect(() => {
    const fetchPokemonData = async () => {
      setIsLoading(true);
      const data = await fetchPokemonList();
      setPokemonList(data);

      const types = await Promise.all(
        data.map(async (pokemon) => fetchPokemonType(pokemon.url))
      );
      setPokemonTypes(types);
      setIsLoading(false);
    };

    fetchPokemonData();
  }, []);

  const handleShowMore = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 3);
  };

  return (
    <div className='gallery'>
      <div className='gallery__legend'>{/* ... Same as before */}</div>
      <h2 className='gallery__title'>Galería de fotos de los PokeCats</h2>
      <p className='gallery__description'>{/* ... Same as before */}</p>
      <ul className='gallery__grid'>
        {pokemonList.slice(0, visibleImages).map((card, index) => {
          const backgroundColor = background.find(
            (type) => type.name === pokemonTypes[index]
          )?.color;

          const imageNumber = index + 1;
          const imageUrl = `https://cataas.com/cat?${imageNumber}`;

          return (
            <li
              key={card.name}
              className='gallery__card'
              style={{ backgroundColor: backgroundColor }}
            >
              {isLoading ? (
                <Preloader />
              ) : (
                <>
                  <img
                    className='gallery__image'
                    src={imageUrl}
                    alt={card.name}
                    onLoad={() => setIsLoading(false)}
                  />
                  <div className='gallery__tab'>{pokemonList[index]?.name}</div>
                </>
              )}
            </li>
          );
        })}
      </ul>
      {!isLoading && visibleImages < pokemonList.length && (
        <button className='gallery__show-more' onClick={handleShowMore}>
          Mostrar más
        </button>
      )}
    </div>
  );
}

export default Gallery;
