import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsState = {
  posts: Post[];
  loading: boolean;
  error: null | string;
};

export const initalPostState: PostsState = {
  "posts": [],
  "loading": false,
  "error": null
};

export const fetchAllPosts = createAsyncThunk(
  `posts/allPosts`,
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      return (await response.data) as Post[];
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchSuccessful = fetchAllPosts.fulfilled;
export const fetchPending = fetchAllPosts.pending;
export const fetchFailed = fetchAllPosts.rejected;

const postsSlice = createSlice({
  "name": `Posts`,
  "initialState": initalPostState,
  "reducers": {},
  "extraReducers": (builder) => {
    builder.addCase(fetchSuccessful, (state, { payload }: PayloadAction<Post[]>) => ({
      ...state,
      "posts": payload
    }));
    builder.addCase(fetchPending, (state) => ({
      ...state,
      "loading": true
    }));
    builder.addCase(fetchFailed, (state, { error }) => (
      {
        ...state,
        "error": error.message ? error.message
          : `Failed to load data`
      }
    ));
  }
});

export default postsSlice.reducer;
