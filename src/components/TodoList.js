import React, { Component } from 'react';


// import { visibilityFilter } from './../reducers/reducers';

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => props.toggleTodo(todo.id)}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </li>))}
    </ul>
  );
};

export default TodoList;
