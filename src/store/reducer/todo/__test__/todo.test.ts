import todos, { addTodo } from 'store/reducer/todo/todo';

describe(`Todo reducer`, () => {
  it(`should return the initialState`, () => {
    expect(todos(undefined, {})).toEqual([
      {
        "id": 1,
        "title": `clean`,
        "description": `clean the floor`
      },
      {
        "id": 2,
        "title": `Running`,
        "description": `Run at the park`
      },
      {
        "id": 3,
        "title": `pack`,
        "description": `Need to pack for traveling`
      }
    ]);
  });
  it(`addTodo action works`, () => {
    expect(addTodo([], {
      "type": addTodo.type,
      "payload": {
        "id": 0,
        "title": `kjkjj uhuguug`,
        "description": `jlkoijijkkjk`
      }
    })).toEqual({ "payload": [], "type": `todo/addTodo` });
  });
  it(`remove action works `, () => {

  });
  it(`sort action works `, () => { });
});

// it(`it should handle addToo`, () => {
//   expect(todos([],
//     {
//       "type": addTodo.type,
//       "payload": [
//         {
//           "id": uuid(),
//           "title": `clean`,
//           "description": `clean the floor`
//         }
//       ]
//     }
//   )).toEqual([
//     {
//       "id": 0,
//       "title": `clean`,
//       "description": `clean the floor`
//     }
//   ]);
// });
