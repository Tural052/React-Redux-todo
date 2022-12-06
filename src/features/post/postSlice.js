import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  posts: [
    { id: 1, title: "First Post!", content: "Hello" },
    { id: 2, title: "Secondary Post", content: "More Text" },
  ],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsAdd: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title,content,userId){
        return{
          payload:{
            id:nanoid(),
            title,
            content,
            user:userId
          }
        }
      }
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
  },
});

export const { postsAdd, postUpdate } = postSlice.actions;
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
