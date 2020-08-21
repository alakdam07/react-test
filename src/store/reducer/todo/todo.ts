import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 as uuid } from "uuid";
import { Todo } from './type';

const initialState: Todo[] = [
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
];

const todoSlice = createSlice({
  "name": `todo`,
  initialState,
  "reducers": {
    "addTodo": (state, { payload }: PayloadAction<string>) => {
      state.push({ "id": uuid(), "description": payload, "title": payload });
    },
    "remove": (state, { payload }: PayloadAction<number>) =>
      state.filter((todo) => todo.id !== payload),
    "sort": (state) => state.sort((a, b) => a.description.localeCompare(b.description)),
    "edit": (state, { payload }: PayloadAction<{ id: number; desc: string }>) => {

    }

  }
});

export const { addTodo, remove, sort, edit } = todoSlice.actions;
export default todoSlice.reducer;
