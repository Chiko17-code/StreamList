import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';
import './App.css'; // ✅ Add this to use the styles below

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>EZTechMovie</h1>
          <p>
            Welcome to EZTechMovie. This Movie store is operated by The Hollywood Theatre. It is
            known for its vast collection of titles for rent, our knowledgeable staff ready to
            recommend your new favorite film, and display cases full of authentic film props and
            costumes from every era of movie making.
          </p>
        </header>

        <Navigation />

        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




