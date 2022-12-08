import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { nanoid } from "nanoid";
import { client } from "../../api/client";
const initialState = {
  status: "idle",
  error: null,
  posts: [],
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await client.get("/fakeApi/posts");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsAdd: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
          },
        };
      },
    },
    postUpdate(state, action) {
      const { id, title, content } = action.payload;
      const excutePost = parseInt(id)
        ? state.posts.find((post) => post.id === parseInt(id))
        : state.posts.find((post) => post.id === id);
      if (excutePost) {
        excutePost.title = title;
        excutePost.content = content;
      }
    },
    reactionAdded(state, action) {
      const { id, reaction } = action.payload;
      const existingPost = parseInt(id)
        ? state.posts.find((post) => post.id === parseInt(id))
        : state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.posts = state.posts.concat(action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { postsAdd, postUpdate, reactionAdded } = postSlice.actions;
export const selectAllPost = (state) => {
  return state.posts.posts;
};
export const selectPostId = (state, postId) => {
  if (parseInt(postId)) {
    return state.posts.posts.find((post) => post.id === parseInt(postId));
  }
  return state.posts.posts.find((post) => post.id === postId);
};
export default postSlice.reducer;
