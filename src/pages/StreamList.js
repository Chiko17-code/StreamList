import React, { useContext } from 'react';
import { StreamListContext } from '../context/StreamListContext';

function StreamList() {
  const { streamList } = useContext(StreamListContext);

  return (
    <div>
      <h2>Your StreamList</h2>

      {streamList.length === 0 ? (
        <p>Your list is currently empty. Search and add some movies!</p>
      ) : (
        <ul>
          {streamList.map((movie) => (
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
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StreamList;



