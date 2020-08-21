import React from 'react';
import { mount } from "enzyme"; // mount is full dom renderning function with children
import Counter from 'components/counter';
import Root from "root";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root >
      <Counter />
    </Root>
  );
  // console.log(wrapped.debug());
});

afterEach(() => {
  wrapped.unmount(); // it cleans the mount after test.
});

describe(`This is counter component`, () => {
  it(``, () => {
    expect(wrapped.find(`h1`).text()).toEqual(`1`);
  });

  it(`after click it will increase the value`, () => {
    expect(wrapped.find(`h1`).text()).toEqual(`1`);
    wrapped.find(`button`).find(`[data-test="increment"]`).simulate(`click`);
    expect(wrapped.find(`h1`).text()).toEqual(`2`);
  });

  it(`after click it will decrease the value`, () => {
    expect(wrapped.find(`h1`).text()).toEqual(`2`);
    wrapped.find(`button`).find(`[data-test="decrement"]`).simulate(`click`);
    expect(wrapped.find(`h1`).text()).toEqual(`1`);
  });
});
