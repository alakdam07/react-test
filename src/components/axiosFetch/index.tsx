import React from 'react';
import { IRootState } from 'store/combineReducer';
import { fetchAllPosts } from 'store/reducer/createAsyncAxios';
import { useSelector, useDispatch } from 'react-redux';
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
margin: 4px 2px;
cursor: pointer;
`;
export default () => {
  const { posts } = useSelector((rootState: IRootState) => rootState.fetching);
  const dispatch = useDispatch();

  return (
    <div>
      {posts.slice(0, 10).map((i, index) =>
        <div key={index} >
          <li>{i.title}</li>
        </div>)}
      <Button data-test="axios-fetch" onClick={() => dispatch(fetchAllPosts())} >
        click for data
      </Button>
    </div>
  );
};
