import React, { useState, useEffect } from 'react';

const StreamList = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('streamItems');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('streamItems', JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    if (!inputValue.trim()) return;
    const newItem = { id: Date.now(), name: inputValue, completed: false };
    setItems([...items, newItem]);
    setInputValue('');
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleToggleComplete = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div>
      <h2>EZTechMovie - StreamList</h2>
      <p>Add and manage your favorite shows and movies.</p>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter movie or show"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {items.map(item => (
          <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            {item.name}
            <button onClick={() => handleToggleComplete(item.id)}>✓</button>
            <button onClick={() => handleDelete(item.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StreamList;







