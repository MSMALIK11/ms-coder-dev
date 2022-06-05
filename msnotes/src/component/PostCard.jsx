import React,{useState} from 'react'

import pimg from './images/p-1.jpeg';
import './styles/postcard/postcard.scss';
  import { Link } from 'react-router-dom';
  import DropDownmenu from './dropdown/DropDownmenu';
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch,useSelector } from 'react-redux';
import { likePost } from '../store/Actions/Post';
import { getFollowingPost } from '../store/Actions/User';


import { useEffect } from 'react';
const PostCard = ({post,isDelete=false,isAccount=false}) => { 
  const {user} = useSelector((state) => state.user);

  // const [likes,setLikes] =useState(post.likes?.lenght);
  const[isLiked,setIsLiked]=useState(false)
   const [likes, setLikes] = useState(post.likes?.length);
  //  const [isLiked, setIsLiked] = useState(post.likes.includes(user._id));
  const [open,setOpen]=useState(false);
  const dispatch=useDispatch()

 
// console.log("user id",user)
const handleLiked=async(id)=>{
  // setLiked(!liked)
  // setLikes(!isLiked? likes+1:likes-1)
  setIsLiked(!isLiked)
  await dispatch(likePost(id));
  if(isAccount){
    console.log('bring me my post bro ')
  }else{
    dispatch(getFollowingPost());

  }


}

useEffect(()=>{
  if(!post) return;
  // if(!user) return;
console.log('use efect run')
if(user){
if (post.likes.includes(user._id)) {
  setIsLiked(true);
} else {
  console.log("something went goes wrong");
}
}



},[post,isLiked,user])






    return (
      <div className="post-card-wraper mt-4">
        <div className="card p-2">
          <div className="card-img shadow">
            <img src={pimg} className="img-fluid" alt="post-img" />
          </div>
          <div className="post-content">
            <p className="">{post.category}</p>
            <Link
              to={`/blog/single-post/${post._id}`}
              className="nav-link text-dark"
            >
              {/* post title */}
              <h1 className='post-title'>{post.title.split(0, 15) + "..."}</h1>
            </Link>

            <div className="author">
              <div className="authname ">
                <div className="likes ">
                  <span>
                    {isLiked ? (
                      <FavoriteIcon
                        sx={{ fontSize: "30px" }}
                        color="secondary"
                        onClick={() => handleLiked(post._id)}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        sx={{ fontSize: "30px" }}
                        onClick={() => handleLiked(post._id)}
                      />
                    )}
                  </span>
                  <span className="text-muted fs-4">
                    {" "}
                    {/* {String(likes)} likes */}
                    {String(likes)} people like it
                  </span>
                </div>
                <Link
                  className="nav-link text-dark"
                  to={`/?username=${post.username}`}
                >
                  <h3 className="text-muted text-capitalize">
                    Author: <span>{post.username}</span>
                  </h3>
                </Link>
              </div>
              {isDelete && (
                <div className="delete-button">
                  <span>
                    <i
                      class="bi bi-three-dots"
                      onClick={() => setOpen(!open)}
                    ></i>
                  </span>

                  {open && (
                    <div className="drop-down-open">
                      <DropDownmenu />
                    </div>
                  )}
                </div>
              )}
              <div className="social">
                <span>
                  <i className="bi bi-instagram"></i>
                </span>
                <span>
                  <i className="bi bi-facebook"></i>
                </span>
                <span>
                  <i className="bi bi-twitter"></i>
                </span>
                <span>
                  <i className="bi bi-whatsapp"></i>
                </span>
                <span>
                  <i className="bi bi-linkedin"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PostCard
