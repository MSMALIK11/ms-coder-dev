import {createReducer} from '@reduxjs/toolkit';
const initialState={}
export const likeReducers=createReducer(initialState,{
    likeRequest:(state)=>{
        state.loading=true
    },
    likeSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload
    },
    likefail:(state,action)=>{
        state.loading=true;
        state.error=action.payload
    },
    clearErrors:(state)=>{
        state.loading=null;
     
    },
    clearMessage:(state)=>{
    
        state.message=null
    },

})