import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Movies from './pages/Movies';
import StreamList from './pages/StreamList';
import Cart from './components/Cart';
import About from './pages/About';

import { CartProvider } from './context/CartContext';
import { StreamListProvider } from './context/StreamListContext';

function App() {
  return (
    <StreamListProvider>
      <CartProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </CartProvider>
    </StreamListProvider>
  );
}

export default App;










