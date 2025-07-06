import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ movie }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart(movie);
  };

  return (
    <div style={styles.card}>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
          style={styles.poster}
        />
      ) : (
        <div style={styles.noPoster}>No Poster</div>
      )}
      <h3>{movie.title}</h3>
      <p><strong>Rating:</strong> {movie.vote_average || "N/A"}</p>
      <p>{movie.overview?.substring(0, 100)}...</p>
      <button onClick={handleAdd} style={styles.button}>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: {
    width: '200px',
    margin: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
  },
  poster: {
    width: '100%',
    borderRadius: '5px',
  },
  noPoster: {
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#eee',
    marginBottom: '10px',
  },
  button: {
    marginTop: '10px',
    padding: '6px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ProductCard;




