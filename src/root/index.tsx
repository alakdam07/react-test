import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/store';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #282c34;
    color: white;
    font-family: "Lucida Console", Courier, monospace;
  }
`;

interface IProps {
  children: JSX.Element[] | JSX.Element;

}
export default ({ children }: IProps) => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      {children}
    </Provider>
  );
};
