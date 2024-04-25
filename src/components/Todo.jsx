import React from 'react';

export default function Todo({ todo, deleteTodo }) {
  const handleClick = () => deleteTodo(todo.key);
  return (
    <li className='todo'>
      <input type='checkbox' checked={todo.isDone} />
      <p>{todo.text}</p>
      <button className='delete' onClick={handleClick}>
        <i className='fa-solid fa-trash'></i>
      </button>
    </li>
  );
}
