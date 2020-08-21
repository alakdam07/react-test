import { combineReducers } from 'redux';
import counter from 'store/reducer/counter';
import todo from 'store/reducer/todo/todo';
import fetchUser from 'store/reducer/fetch';
import fetching from 'store/reducer/createAsyncAxios';
const rootReducer = combineReducers({
  counter,
  todo,
  fetchUser,
  fetching
});

export type IRootState = ReturnType<typeof rootReducer>;
export default rootReducer;
