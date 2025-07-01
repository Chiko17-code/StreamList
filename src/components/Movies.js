// src/components/Movies.js
import React, { useState } from 'react';
import axios from 'axios';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
    );
    setMovies(response.data.results);
  };

  return (
    <div>
      <h2>Search TMDB Movies</h2>
      <input
        type="text"
        value={query}
        placeholder="Enter movie title"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovies}>Search</button>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title} ({movie.release_date})</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;


