import React,{useEffect} from "react";

import BlogHome from "./BlogHome";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Singlepost from "./Singlepost";

import Add from "./crud/Add";
import Update from "./crud/update";
import Layout from "./videos/Layout";
import Profile from "../Profile/profile";
import { useLocation } from "react-router-dom";

import { loadUser,fetchAllUsers,getFollowingPost } from "../store/Actions/User";
import{useDispatch,useSelector} from 'react-redux';
import { useAlert } from "react-alert";


const Home = () => {
  let url = window.location.pathname;

  const { search } = useLocation();
  const dispatch = useDispatch();
     const { message } = useSelector((state) => state.like);
      const alert = useAlert();

  useEffect(async() => {
    await dispatch(loadUser());
    await dispatch(getFollowingPost());
     dispatch(fetchAllUsers());
 
  }, [dispatch,url]);
  useEffect(() => {
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, message,alert]);
  const user = "admin";
  return (
    <div>
    
    <div className="blur"></div>
    <div className="blur" style={{top:100,right:0}}></div>
<Navbar />
      <Routes>
        <Route path="/" element={<BlogHome />} />

        <Route path="/blog/single-post/:id" element={<Singlepost />} />

        <Route path="/blog/single-post/add" element={<Add />} />
        <Route path="/blog/single-post/update/:id" element={<Update />} />

        <Route path="/videos" element={<Layout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* <Blogbanner />
            <BlogHome /> */}
    </div>
  );
};

export default Home;
