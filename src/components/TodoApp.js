import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe;
  }

  onToggleTodo(id) {
    this.context.store.dispatch({ id, type: 'TOGGLE_TODO'});
  }

  handleAddTodo(inputValue) {
    const task = inputValue.value;
    if (task.length > 0) {
      inputValue.value = '';

      this.context.store.dispatch({
        type: 'ADD_TODO',
        text: task,
        id: nextTodoId++
      });
      console.log(this.context.store.getState());
    }
  }

  handleFiltering(e, filter) {
    e.preventDefault();
    this.context.store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter });
  }

  render() {

    const visibleTodos = getVisibleTodos(this.context.store.getState().todos, this.context.store.getState().visibilityFilter);

    return (
      <div>
        <AddTodo addTodo={this.handleAddTodo} />

        <TodoList
          todos={visibleTodos}
          visibilityFilter={this.context.store.getState().visibilityFilter}
          toggleTodo={this.onToggleTodo}
        />

        <Filters
          currentFilter={this.context.store.getState().visibilityFilter}
          onFiltering={this.handleFiltering}
        />

        {/* <p><FilterLink filter='SHOW_ALL' currentFilter={store.getState().visibilityFilter} onFiltering={this.handleFiltering}>All</FilterLink></p>
        <p><FilterLink filter='SHOW_ACTIVE' currentFilter={store.getState().visibilityFilter} onFiltering={this.handleFiltering}>Active</FilterLink></p>
        <p><FilterLink filter='SHOW_COMPLETED' currentFilter={store.getState().visibilityFilter} onFiltering={this.handleFiltering}>Completed</FilterLink></p> */}
      </div>
    );
  }
}

// we need contextTypes to get store from Provider
TodoApp.contextTypes = {
  store: PropTypes.object
}

export default TodoApp;
