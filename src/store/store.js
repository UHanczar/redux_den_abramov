import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter } from './../reducers/reducers';

const todoApp = combineReducers({ todos, visibilityFilter });

const store = createStore(todoApp);

export default store;
