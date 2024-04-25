import React, { useState } from 'react';

export default function Form({ addTodo }) {
  const [text, setText] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    addTodo({
      key: Date.now().toString(16),
      text: text,
      checked: false,
    });
  };
  const handleChange = (event) => setText(event.target.value);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        id='todo'
        name='todo'
        value={text}
        onChange={handleChange}
      />
      <button>+</button>
    </form>
  );
}
