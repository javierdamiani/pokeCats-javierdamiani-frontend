import React from 'react';
import './Main.css';
import Presentation from '../Presentation/Presentation';
import About from '../About/About';
// import Cats from '../Cats/Cats';

function Main() {
  return (
    <main className='main'>
      <Presentation />
      <About />
      {/* <Cats /> */}
    </main>
  );
}

export default Main;
