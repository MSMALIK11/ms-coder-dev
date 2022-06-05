import { createReducer } from "@reduxjs/toolkit";



const initialState={
    loading:true
}


export const singlePostReducer=createReducer(initialState,{

    singlePostRequest:(state)=>{
        state.loading=true;
    },
    singlePostSuccess:(state,action)=>{
        state.loading=false;
        state.post=action.payload
    },
    singlePostFail:(state)=>{
        state.loading=true
    }
});

// comment reducer

export const doCommentPostReducer=createReducer(initialState,{
doCommentRequest:(state)=>{
    state.loading=true;
},
doCommentSuccess:(state,action)=>{
    state.loading=false;
    state.message=action.paylaod
},
doCommentFail:(state)=>{
    state.loading=false;
}

})