// import React, { useState } from 'react';
// import Todo from './Todo.jsx';
// import { useImmer } from 'use-immer';
// import Form from './Form.jsx';

// export default function List() {
//   const [todos, updateTodos] = useImmer([]);
//   const addTodo = (todo) => {
//     updateTodos((todos) => todos.push(todo));
//   };
//   const deleteTodo = (key) => {
//     updateTodos((todos) => {
//       const deleteIndex = todos.findIndex((todo) => todo.key === key);
//       todos.splice(deleteIndex, 1);
//     });
//   };
//   return (
//     <div>
//       <ul className='list'>
//         {todos.map((todo) => (
//           <Todo todo={todo} />
//         ))}
//       </ul>
//       <Form addTodo={addTodo} />
//     </div>
//   );
// }
