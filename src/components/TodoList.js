import React, { Component } from 'react';

import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          text={todo.text}
          completed={todo.completed}
        />
        ))}
    </ul>
  );
};

export default TodoList;
