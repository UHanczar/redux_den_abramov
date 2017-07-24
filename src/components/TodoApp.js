import React, { Component } from 'react';

import store from './../store/store';
import { getVisibleTodos } from './../actions/actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filters from './Filters';

let nextTodoId = 0;
class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.onToggleTodo = this.onToggleTodo.bind(this);
    this.handleFiltering = this.handleFiltering.bind(this);
  }

  onToggleTodo(id) {
    store.dispatch({ id, type: 'TOGGLE_TODO'});
  }

  handleAddTodo(inputValue) {
    const task = inputValue.value;
    if (task.length > 0) {
      inputValue.value = '';

      store.dispatch({
        type: 'ADD_TODO',
        text: task,
        id: nextTodoId++
      });
    }
  }

  handleFiltering(e, filter) {
    e.preventDefault();
    store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter });
  }

  render() {

    const visibleTodos = getVisibleTodos(store.getState().todos, store.getState().visibilityFilter);

    return (
      <div>
        <AddTodo addTodo={this.handleAddTodo} />

        <TodoList
          todos={visibleTodos}
          visibilityFilter={store.getState().visibilityFilter}
          toggleTodo={this.onToggleTodo}
        />

        <Filters
          currentFilter={store.getState().visibilityFilter}
          onFiltering={this.handleFiltering}
        />

        {/* <p><FilterLink filter='SHOW_ALL' currentFilter={store.getState().visibilityFilter} onFiltering={this.handleFiltering}>All</FilterLink></p>
        <p><FilterLink filter='SHOW_ACTIVE' currentFilter={store.getState().visibilityFilter} onFiltering={this.handleFiltering}>Active</FilterLink></p>
        <p><FilterLink filter='SHOW_COMPLETED' currentFilter={store.getState().visibilityFilter} onFiltering={this.handleFiltering}>Completed</FilterLink></p> */}
      </div>
    );
  }
}

export default TodoApp;
