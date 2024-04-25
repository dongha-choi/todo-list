import './App.css';
import React, { useState } from 'react';
import { useImmer } from 'use-immer';
// import ControlBar from './components/ControlBar.jsx';
import Todo from './components/Todo.jsx';
import Form from './components/Form.jsx';

function App() {
  const [todos, updateTodos] = useImmer([]);
  /*
    [Immer] An immer producer returned a new value *and* modified its draft. 
    Either return a new value *or* modify the draft.
    const addTodo = (todo) => updateTodos((todos) => todos.push(todo));
    괄호가 없는 화살표 함수는 자동으로 return을 실행하기 때문에 에러 발생
  */
  const addTodo = (todo) => {
    updateTodos((todos) => {
      todos.push(todo);
    });
  };
  const deleteTodo = (key) => {
    updateTodos((todos) => {
      const deleteIndex = todos.findIndex((todo) => todo.key === key);
      todos.splice(deleteIndex, 1);
    });
  };
  return (
    <div className='container'>
      <ul className='list'>
        {todos.map((todo) => (
          <Todo todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
      <Form addTodo={addTodo} />
    </div>
  );
}

export default App;
