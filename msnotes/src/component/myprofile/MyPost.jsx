import React from 'react'
import './post.scss';
import { useSelector } from 'react-redux';
import PostCard from '../PostCard';
import { useEffect } from 'react';
import Friends from '../friend/Friends';

const MyPost = () => {


    const {isAuthenticated,user} = useSelector((state) => state.user);
   



  return (
    <div className="my-profile-post mt-4">
      <div className="left-profile-side"></div>
      <div className="center-profile-side">
        <h1>Articles By This Author</h1>
        {user &&
          user.posts.map((post, i) => (
            <PostCard post={post} key={i} isDelete />
          ))}
      </div>
      <div className="right-profile-side ">
        <Friends />
      </div>
    </div>
  );
}

export default MyPost