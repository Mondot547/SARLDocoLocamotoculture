import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './components/menu/Nav';
import Home from './pages/Home';
import './pages/Products';
import './pages/About';
import './pages/Contact';




const App = () => {
  return (

    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element="products" />
        <Route path="/about" element="about" />
        <Route path="/contact" element="contact" />
      </Routes>
    </BrowserRouter>

  );
};

export default App;