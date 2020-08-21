import React from 'react';
import { shallow } from 'enzyme';
import { cleanup } from '@testing-library/react';
import App from 'App';
import CommentBox from 'components/commentbox';
import CommentList from 'components/commentlist';
import Box from 'components/box';

describe(`whole app component`, () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  afterEach(cleanup);
  it(`renders Comment Box component`, () => {
    // expect(wrapped).toMatchSnapshot();
    expect(wrapper.find(CommentBox).length).toEqual(1);
  });
  it(`renders the Comment List`, () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
  });

  it(`it renders the Box component`, () => {
    expect(wrapper.find(Box).length).toEqual(0);
  });
});

