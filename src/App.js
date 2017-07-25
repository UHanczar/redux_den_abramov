import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';

import { todos, visibilityFilter } from './reducers/reducers';
// import store from './store/store';
import TodoApp from './components/TodoApp';

const todoApp = combineReducers({ todos, visibilityFilter });

// const store = createStore(todoApp);

// store.dispatch({
//   type: 'ADD_TODO',
//   id: String(Math.random()).split('').splice(2).join(''),
//   text: 'Simple text'
// });
// console.log(store.getState());

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
};

// const renderState = () => {
  // console.log(store.getState());

  ReactDOM.render(
    <Provider store={createStore(todoApp)}>
      <TodoApp />
    </Provider>, document.getElementById('root'));
// };

// renderState();
// store.subscribe(renderState);
