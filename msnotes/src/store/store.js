import {configureStore} from '@reduxjs/toolkit';
import { userReducers,postFollowingReducers,getAllUsersReducers } from './Reducers/User';
import { likeReducers } from './Reducers/Post';
import { doCommentPostReducer, singlePostReducer } from './Reducers/singlePost';

const store = configureStore({
  reducer: {
    user: userReducers,
    posts: postFollowingReducers,
    users: getAllUsersReducers,
    like: likeReducers,
    singlePost: singlePostReducer,
    comment: doCommentPostReducer,
  },
});

export default store