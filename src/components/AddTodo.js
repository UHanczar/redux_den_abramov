import React from 'react';

import Input from './Input';

const AddTodo = ({ addTodo }) => {
  let inputValue;
  return (
    <div>
      <Input inputRef={task => inputValue = task} />
      <button onClick={() => addTodo(inputValue)}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
