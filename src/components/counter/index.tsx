import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'store/reducer/counter/index';
import { IRootState } from 'store/combineReducer';
import styled from 'styled-components';
const Button = styled.button`
background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

const Text = styled.h1`
color: blue;
`;

export default () => {
  const counter = useSelector((state: IRootState) => state.counter);

  const dispatch = useDispatch();
  return (
    <div >
      <Text>{counter}</Text>
      <Button data-test="increment" onClick={() => dispatch(increment())}>
        Increase counters
      </Button>
      <br></br>
      <br></br>
      <Button data-test="decrement" onClick={() => dispatch(decrement())}>
        Decrement counter
      </Button>
    </div>
  );
};
