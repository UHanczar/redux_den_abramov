import React, { Component } from 'react';

import store from './../store/store';
import { getVisibleTodos } from './../actions/actions';
import TodoList from './TodoList';
import Input from './Input';
import FilterLink from './FilterLink';

let nextTodoId = 0;
class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.onToggleTodo = this.onToggleTodo.bind(this);
    this.handleFiltering = this.handleFiltering.bind(this);
  }

  addTodo() {
    const task = this.inputValue.value;
    if (task.length > 0) {
      this.inputValue.value = '';

      store.dispatch({
        type: 'ADD_TODO',
        text: task,
        id: nextTodoId++
      });
    }
  }

  onToggleTodo(id) {
    store.dispatch({ id, type: 'TOGGLE_TODO'});
  }

  handleFiltering(e, filter) {
    e.preventDefault();
    store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter });
  }

  render() {

    const visibleTodos = getVisibleTodos(store.getState().todos, store.getState().visibilityFilter);

    return (
      <div>
        <Input inputRef={task => this.inputValue = task} />
        <button onClick={this.addTodo}>Add Todo</button>
        {/* <TodoList todos={store.getState().todos} /> */}

        <TodoList todos={visibleTodos} visibilityFilter={store.getState().visibilityFilter} toggleTodo={this.onToggleTodo} />
        <p><FilterLink filter='SHOW_ALL' currentFilter={store.getState().visibilityFilter} onFiltering={this.handleFiltering}>All</FilterLink></p>
        <p><FilterLink filter='SHOW_ACTIVE' currentFilter={store.getState().visibilityFilter} onFiltering={this.handleFiltering}>Active</FilterLink></p>
        <p><FilterLink filter='SHOW_COMPLETED' currentFilter={store.getState().visibilityFilter} onFiltering={this.handleFiltering}>Completed</FilterLink></p>
      </div>
    );
  }
}

export default TodoApp;
