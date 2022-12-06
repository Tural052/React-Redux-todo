import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { nanoid } from "nanoid";

const initialState = {
  posts: [
    {
      id: 1,
      title: "First Post!",
      content: "Hello",
      date: sub(new Date(), { minutes: 5 }).toISOString(),
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    },
    {
      id: 2,
      title: "Secondary Post",
      content: "More Text",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    },
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
    reactionAdded(state,action){
      const {id,reaction} = action.payload;
      const existingPost = parseInt(id)
      ? state.posts.find((post) => post.id === parseInt(id))
      : state.posts.find((post) => post.id === id);
      if(existingPost){
        existingPost.reactions[reaction]++
      }
    }
  },
});

export const { postsAdd, postUpdate,reactionAdded } = postSlice.actions;
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
