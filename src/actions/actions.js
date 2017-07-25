export const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
};

let nextTodoId = 0;
export const addTodoAction = (text) => {
  return {
    type: 'ADD_TODO',
    text,
    id: nextTodoId++
  };
};

export const toggleTodoAction = (id) => {
  return { id, type: 'TOGGLE_TODO'}
};

export const filterTodoAction = (filter) => {
  return { type: 'SET_VISIBILITY_FILTER', filter }
};

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};
