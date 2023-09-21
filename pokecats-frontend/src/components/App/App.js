import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import Donate from '../Donate/Donate';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  return (
    <Router>
      <div className='page'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='*' element={<Main />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
