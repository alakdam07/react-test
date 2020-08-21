import React from 'react';
import CommentBox from 'components/commentbox';
import CommentList from 'components/commentlist';
import Counter from 'components/counter';
import Fetch from 'components/fetchdata';
import styled from 'styled-components';
import FetchAxios from 'components/axiosFetch';
import './App.css';

const Body = styled.div`
margin-top:30px;
`;

const Divider = styled.div`
margin-top: 40px;
`;

const LineDivider = styled.hr`
border-top: 1px solid;
`;
const App = () => {
  return (
    <Body>
      <Divider>
      </Divider>
      <Divider>
        <CommentList />
        <CommentBox />
      </Divider>
      <LineDivider />
      <Divider>
        <Counter />
      </Divider>
      <LineDivider />
      <Divider>
        <Fetch />
      </Divider>
      <LineDivider />
      <Divider>
        <FetchAxios />
      </Divider>
    </Body>
  );
};

export default App;
