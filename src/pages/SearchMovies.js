import React, { useState, useContext } from 'react';
import { StreamListContext } from '../context/StreamListContext';

function SearchMovies() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const { addToStreamList } = useContext(StreamListContext); // context function

  const handleSearch = async () => {
    setError('');
    setResults([]);

    try {
      const apiKey = '99ac73004860e4bd739fedf787745ca8'; // Replace with your TMDB API key
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );
      const data = await res.json();

      if (data.results) {
        setResults(data.results);
      } else {
        setError('No movies found.');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter movie title"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <h3>Results</h3>
        {results.length === 0 && <p>No results to display yet.</p>}
        <ul>
          {results.map((movie) => (
            <li key={movie.id} style={{ marginBottom: '20px' }}>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  style={{ borderRadius: '8px' }}
                />
              )}
              <div>
                <strong>{movie.title}</strong> ({movie.release_date?.split('-')[0]})
                <p>{movie.overview}</p>
                <p>⭐ Rating: {movie.vote_average}/10</p>
                <button onClick={() => addToStreamList(movie)}>Add to StreamList</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchMovies;






