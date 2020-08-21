import React from 'react';
import { mount } from "enzyme"; // mount is full dom renderning function
import CommentBox from 'components/commentbox';
import Root from 'root';
// In this test file we will render whole component with its children.
// This test called `Full Dom rendering`. More details we can find info
// from Airbnb.io.enzyme

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount(); // it cleans the mount after test.
});

it(`Comment component have input and button`, () => {
  expect(wrapped.find(`input`).length).toEqual(1);
  expect(wrapped.find(`button`).length).toEqual(1);
});
describe(`The input`, () => {
  beforeEach(() => {
    wrapped.find(`input`).simulate(`change`, {  // we have use basic javascript event
      // More info about simulate and mock
      // we can check : https:enzymejs.github.io/enzyme/docs/api/ReactWrapper/simulate.html
      "target": { "value": `new task` }  // this is fake event
    });
    // https:enzymejs.github.io/enzyme/docs/api/ShallowWrapper/update.html
    wrapped.update();  // force to update the component
  });

  it(`it has input and user can type in`, () => {
    expect(wrapped.find(`input`).prop(`value`)).toEqual(`new task`);
  });

  it(`after submit the form, textarea is empty`, () => {
    wrapped.find(`form`).simulate(`submit`);
    wrapped.update();
    expect(wrapped.find(`input`).prop(`value`)).toEqual(``);
  });
});
