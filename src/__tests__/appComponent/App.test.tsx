import React from 'react';
import { shallow } from 'enzyme'; // Shallow text render the whole component not the children
import App from 'App';
import CommentBox from 'components/commentbox';
import CommentList from 'components/commentlist';

describe(`whole app component`, () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
    // console.log(wrapper.debug());
  });

  it(`renders Comment Box component`, () => {
    // expect(wrapped).toMatchSnapshot();
    expect(wrapper.find(CommentBox).length).toEqual(1);
  });
  it(`renders the Comment List`, () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
  });
});

