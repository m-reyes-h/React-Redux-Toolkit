import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import userReducer from "../features/users/usersSlice";

// The most common reason to use middleware is to allow different kinds of async logic
// to interact with the store

export default configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer
  }
});
