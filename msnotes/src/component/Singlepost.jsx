import React,{useEffect} from 'react';
import './styles/singlepost/single-post.scss';
import auth from './images/user-1.jpg';
import postbg from './images/s-1.jpeg';
import{ FontAwesomeIcon }from '@fortawesome/react-fontawesome';


import { faFacebookF, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';

import Category from './features/Category';
import RecentPost from './recentpost/RecentPost';
import Comment from './features/Comment';


import {  deletePost} from './services/api';
import { getSinglePost} from '../store/Actions/singlePostAction';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../commen/Loading';
const Singlepost = () => {

const { post, loading } = useSelector((state) => state.singlePost);


const dispatch=useDispatch();




let {id}=useParams();

// console.log(postId);
useEffect(async () => {
  console.log("getting single post ");
  await dispatch(getSinglePost(id));
}, [dispatch,id]);



const handleDelete= async()=>{
console.log('del clicked');
  
//  await deletePost(Post._id);

}

    return (

    
   <>

   {
loading ? <Loading />:
   
      <div className="container main-wraper">
         
        <div className="row">
          <div className="col-lg-12">
            <div className="content-block">
              <div className="single-post-wraper ">
                <div className="post-thumbnail">
                  <img src={postbg} alt="" />
                </div>

                <div className="post-details">
                  <div className="post-content">
                    {/* <h4>{post.category}</h4> */}
                    <h1>{post && post.title}</h1>

                    <div className="row justify-content-between">
                      <div className="col-lg-6 col-md-6">
                        <div className="post-auth d-flex align-items-center">
                          <img src={auth} alt="" className="me-5" />
                          <div className="">
                            <Link
                              className="nav-link"
                              style={{ color: "palevioletred" }}
                              to={`/?username=${post.username}`}
                            >
                              {" "}
                              <h2>{post.username}</h2>
                            </Link>

                            <p>december 12,2021 </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 social">
                        <ul>
                          <li>
                            <FontAwesomeIcon icon={faFacebookF} />
                          </li>
                          <li>
                            {" "}
                            <FontAwesomeIcon icon={faInstagram} />
                          </li>

                          <li>
                            {" "}
                            <FontAwesomeIcon icon={faTwitter} />
                          </li>

                          <li>
                            {" "}
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </li>
                        </ul>
                      </div>
                      <hr className=" mt-4 line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <h1>description</h1> */}
          </div>
        </div>

        {/*  post details  */}
        <div className=" my-2 d-flex mt-5 ">
          <Link className="btn " to="/blog/single-post/add">
            <i className="bi bi-plus-lg fs-1"></i>
          </Link>
          <Link className="btn " to={`/blog/single-post/update/${post._id}`}>
            <i className="bi bi-arrow-repeat fs-1"></i>
          </Link>
          <Link className="btn " to="/">
            <i className="bi bi-trash fs-1" onClick={handleDelete}></i>
          </Link>

        </div>
       

        <div className="row mt-5">
          <div className="col-lg-8">
            <div className="desc p-5 shadow">
              <h1>{post && post.title}</h1>
              <p className="para">{post.description}</p>

              <div className="comment">
                <Comment comment={post.comment} post={post} />
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cat card">
              <Category />
            </div>
            <div className="recent mt-5 ">
              <RecentPost />
            </div>
          </div>
        </div>

        {/* end container  */}
      </div>

   }
      </>
    )
}



  
export default Singlepost 
