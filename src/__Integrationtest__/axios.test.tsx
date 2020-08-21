import React from 'react';
import App from 'components/axiosFetch';
import { mount } from 'enzyme';
import Root from '../root';
import moxios from 'moxios';
beforeEach(() => {
  moxios.install();
  moxios.stubRequest(`https://jsonplaceholder.typicode.com/posts`, {
    "status": 200,
    "response": [{ "name": `Fetched #1` }, { "name": `Fetched #2` }]
  });
});

afterEach(() => {
  moxios.uninstall();
});
it(`user will click the button and it will display the list of name`, (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // console.log(wrapped.debug());
  wrapped.find(`button`).find(`[data-test="axios-fetch"]`).simulate(`click`);
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find(`li`).length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
