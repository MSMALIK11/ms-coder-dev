import React,{useEffect,useState} from 'react'

import PostCard from './PostCard'

import { getAllPost } from './services/api';


import {useLocation} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getFollowingPost } from '../store/Actions/User';

const Posts = () => {


    // const[Post,setPost]= useState([]);
    // const[loading,setLoading]= useState(true);

    // const {search}= useLocation();
    const dispatch=useDispatch();
   const {posts:Post,loading}=useSelector((state)=>state.posts);
 
    // useEffect(() => {
    //   dispatch(getFollowingPost(search));
     


    // }, [search])



    return (
      <div className="mt-4">
        {loading ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          Post && Post.slice(0)
            .reverse()
            .map((post, index) => {
              return <PostCard post={post} key={index} />;
            })
        )}
      </div>
    );
}

export default Posts
