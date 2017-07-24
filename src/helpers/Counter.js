import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Counter from './Counter';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};


const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
);
const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter
    value={store.getState()}
    onIncrement={() => {
      store.dispatch({type: 'INCREMENT'});
    }}
    onDecrement={() => {
      store.dispatch({ type: 'DECREMENT' });
    }}
   />, document.getElementById('root'));
};
render();
store.subscribe(render);

// implementations of compineReducer
// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(state.todos, action),
//     visibityFilter: visibityFilter(state.visibityFilter, action)
//   };
// };
