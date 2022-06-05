import React from "react";
import MyPost from "../component/myprofile/MyPost";
import "./style/profile.scss";
import { useSelector } from "react-redux";
const Profile = () => {
     const {user } = useSelector((state) => state.user);
   
// console.log('user',user)
  return (
    <>
      <div className="profile">
        <div className="profile-wraper">
          <div className="img">
            <i className="bi bi-person-circle"></i>
          </div>

          <div className="author-name mt-4 text-uppercase text-center">
            <h1>{user && user.name}</h1>
            <p>WEB DESIGNER</p>
          </div>
        </div>

        <MyPost />
      </div>
    </>
  );
};

export default Profile;
