import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, combineReducers } from 'redux';

// import { todos, visibilityFilter } from './reducers/reducers';
import store from './store/store';
import TodoApp from './components/TodoApp';

// const todoApp = combineReducers({ todos, visibilityFilter });

// const store = createStore(todoApp);

// store.dispatch({
//   type: 'ADD_TODO',
//   id: String(Math.random()).split('').splice(2).join(''),
//   text: 'Simple text'
// });
// console.log(store.getState());

const renderState = () => {
  console.log(store.getState());
  ReactDOM.render(<TodoApp />, document.getElementById('root'));
};

renderState();
store.subscribe(renderState);
