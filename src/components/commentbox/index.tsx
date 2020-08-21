import React, { useState } from 'react';
import styled from 'styled-components';
import { addTodo } from 'store/reducer/todo/todo';
import { useDispatch } from 'react-redux';
export interface ICommentBox {

}

const TextInput = styled.input`
width: 100%;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
margin-top: 6px;
margin-bottom: 10px;
`;

const Button = styled.button`
background-color: #4CAF50; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
`;

export default () => {
  const [inputValue, setInputValue] = useState(``);
  const dispatch = useDispatch();

  const changeHandler = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue(``);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ "display": `block`, "marginBottom": 20 }}
      >
        <TextInput
          value={inputValue}
          onChange={changeHandler}
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
};
