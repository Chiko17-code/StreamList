import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=99ac73004860e4bd739fedf787745ca8&query=${encodeURIComponent(query)}`
      );

      const data = await response.json();
      console.log(data); // Debugging: shows what TMDB returns

      if (data.results) {
        setMovies(data.results);
        setError(null);
      } else {
        setMovies([]);
        setError('No results found.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Something went wrong while fetching.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search TMDB Movies</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        style={{ padding: '8px', width: '300px' }}
      />
      <button onClick={handleSearch} style={{ marginLeft: '10px', padding: '8px 16px' }}>
        Search
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '20px' }}>
        {movies.map((movie) => (
          <ProductCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;





