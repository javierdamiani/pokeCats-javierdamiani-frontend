import React, { useState } from 'react';
import './Donate.css';

function Donate() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar cualquier lógica de envío de datos, como enviar los datos a un servidor o mostrar un mensaje de éxito.
    console.log('Nombre:', name);
    console.log('Celular:', phone);
    console.log('Correo electrónico:', email);
  };

  return (
    <div className='donate'>
      <h2 className='donate__title'>Únete a los PokeCats</h2>
      <p className='donate__text'>
        Si quieres unirte y adoptar a uno de los PokeCats puedes hacerlo a
        través de este formulario, nosotros te contactaremos
      </p>
      <form className='donate__form' onSubmit={handleSubmit}>
        <div className='donate__form-group'>
          <label htmlFor='name'>Nombre:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='donate__form-group'>
          <label htmlFor='phone'>Celular:</label>
          <input
            type='tel'
            id='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className='donate__form-group'>
          <label htmlFor='email'>Correo Electrónico:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='donate__submit' onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Donate;
