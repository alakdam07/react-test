import React from 'react';
import { mount } from "enzyme"; // mount is full dom renderning function with children
import CommentList from 'components/commentlist';
import Root from 'root';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentList />
    </Root>
  );
  // console.log(wrapped.debug());
});

afterEach(() => {
  wrapped.unmount(); // it cleans the mount after test.
});

it(`Find the lenght of the li from redux store`, () => {
  expect(wrapped.find(`li`).length).toEqual(3);
});

it(`display the text of the li from redux store`, () => {
  const list = wrapped.find(`[data-test="list"]`).map((node) => node.text());
  expect(list).toEqual([`clean`, `Running`, `pack`]);
});

describe(`remove button exist`, () => {
  it(`Remove button name render without crash`, () => {
    const removeButton = wrapped.find(`button`).find(`[data-test="removeButton"]`);
    expect(removeButton.at(0).text()).toEqual(`remove`);
  });
  it(`remove button lenght`, () => {
    const removeButton = wrapped.find(`button`).find(`[data-test="removeButton"]`).length;
    expect(removeButton).toEqual(3);
  });
});

it(`remove button works`, () => { });
it(`sort button works`, () => { });
