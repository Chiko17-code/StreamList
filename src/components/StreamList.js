import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheck, faUndo } from '@fortawesome/free-solid-svg-icons';

function StreamList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim() === '') return;

    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex].text = input;
      setItems(updated);
      setEditIndex(null);
    } else {
      setItems([...items, { text: input, completed: false }]);
    }

    setInput('');
  };

  const handleEdit = (index) => {
    setInput(items[index].text);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const handleToggle = (index) => {
    const updated = [...items];
    updated[index].completed = !updated[index].completed;
    setItems(updated);
  };

  return (
    <div>
      <h2>EZTechMovie - StreamList</h2>
      <p>Add and manage your favorite shows and movies.</p>

      <input
        type="text"
        placeholder="Enter movie or show"
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            {item.text}
            <button onClick={() => handleToggle(index)} title="Complete/Undo">
              <FontAwesomeIcon icon={item.completed ? faUndo : faCheck} />
            </button>
            <button onClick={() => handleEdit(index)} title="Edit">
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => handleDelete(index)} title="Delete">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;






