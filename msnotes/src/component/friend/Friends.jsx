import React from 'react';
import './friend.scss';

import { useSelector } from 'react-redux';
const Friends = () => {
  const[follow,setFollow]=React.useState(false);
  const { users } = useSelector((state)=>state.users)
 const  handleFollow=(e)=>{

    setFollow(!follow)
  }
  return (
    <div className="friends-wraper shadow">
      {users && users.map((user,i)=>{
        return (
          <div className="friend" key={i}>
            <button
              className={`${follow ? "active" : ""}`}
              onClick={handleFollow}
            >
              {!follow ? "follow" : "following"}
            </button>
            <span className="friend-image">
              <i className="bi bi-person-circle"></i>
            </span>
            <div className="friend-info">
              <h5 className="frien-name">{user.name} </h5>
              <span className="text-muted"> new account</span>
            </div>
          </div>
        );
      })}
     

    
    </div>
  );
}

export default Friends