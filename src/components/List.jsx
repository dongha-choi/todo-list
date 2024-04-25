import React, { useState } from 'react';
import Todo from './Todo';

export default function List({ todos }) {
  return (
    <div>
      <ul className='list'>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}
