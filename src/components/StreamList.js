import React, { useState } from 'react';

function StreamList() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>StreamList</h1>
      <p>Add your movies or shows below:</p>

      <input
        type="text"
        value={input}
        placeholder="Enter movie or show"
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px' }}>Add</button>

      {/* Show the list here */}
      <ul style={{ marginTop: '20px' }}>
        {items.map((item, index) => (
          <li key={index} style={{ padding: '5px 0' }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;

