import React from 'react';

export default function Todo({ key, text, isDone }) {
  return (
    <li className='todo'>
      <input type='checkbox' checked={isDone} />
      <p>{text}</p>
    </li>
  );
}
