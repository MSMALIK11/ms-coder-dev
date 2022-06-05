import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  user:null,
  isAuthenticated:false,
  posts:null
  
};
export const userReducers = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoginFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  RegisterRequest: (state) => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  RegisterSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  RegisterFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  LoadUserRequest: (state) => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user =action.payload;
    state.isAuthenticated = true;
  },
  LoadUserFail: (state, action) => {
    state.loading = true;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
});


export const postFollowingReducers=createReducer(initialState,{
  postFollowingRequest:(state)=>{
    state.loading=true;
  },
  postFollowingSuccess:(state,action)=>{
    state.loading=false;
    state.posts=action.payload;
  },
  postFollowingFail:(state)=>{
    state.loading=true;
  }
});

export const getAllUsersReducers = createReducer(initialState,{
  getAllUsersRequest:(state)=>{
    state.loading=true;

  },
  getAllUsersSuccess:(state,action)=>{
    state.loading=false;
    state.users=action.paylaod;
  },
  getAllusersFail:(state)=>{
    state.loading=true;
  }

});

