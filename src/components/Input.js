import React from 'react';

const Input = (props) => {
  let input;
  return (
    <input type='text' placeholder='Enter your todo' ref={props.inputRef} />
  );
};

export default Input;
