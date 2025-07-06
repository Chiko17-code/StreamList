import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                width: '200px',
                textAlign: 'center',
              }}
            >
              {item.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  alt={item.title}
                  style={{ width: '100%', borderRadius: '4px' }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '300px',
                    backgroundColor: '#eee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  No Poster
                </div>
              )}
              <h4>{item.title}</h4>
              <p>Rating: {item.vote_average}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;










