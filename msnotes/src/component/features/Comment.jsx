import { faHeart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState,useEffect} from 'react'


import usercmt from '../images/user-1.jpg' ;

import '../styles/comment/comment.scss';
import { doComentOnPost,getSinglePost } from '../../store/Actions/singlePostAction';

import { useSelector,useDispatch } from 'react-redux';

const CommentBox = ({post,comment=[]}) => {
    const[value,setValue]=useState("")
   
const dispatch=useDispatch();
    const d= new Date();
    const month= d.toLocaleString('default', { month: 'long' })
    const date= d.getDate().toLocaleString()

    const {posts}=useSelector((state)=>state.posts)
    const cmt=posts.map((item)=> item.comment)
   

    // add new comment 
    const addComment=async(e)=>{
        e.preventDefault();
        if(!value){
            return
        }
   
        await dispatch(doComentOnPost(value,post._id))

    dispatch(getSinglePost(post._id))

        setValue("");

    }

 
    

const removeCom=(index)=>{
   
    // setComment((comments)=>{
    //     return comments.filter((arr,newindex)=> {
    //         return  newindex!==index
    //     })
    // });


}

    return (
      <div>
        <div className="comment-wraper">
          <div className="comment p-3">
            <h1>Discusion (1)</h1>

            <form action="" className="shadow mt-4">
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Add to the discusion"
              />

              <button onClick={addComment}>Submit</button>
            </form>
            {comment && comment.map((item, index) => (
              <div index={index} key={index}>
                <div className="show-comment shadow mt-4">
                  <div className=" d-flex align-items-center ms-3">
                    <img src={usercmt} alt="" className="me-4" />
                    <div>
                      <h5 className='text-capitalize'>
                     {item && item.user.name} 
                      </h5>
                      <span className="ms-3">
                        {month} <span>{date}</span>
                      </span>
                    </div>
                  </div>
                  
                    <p> {item && item.comment} </p>

                  {/* <div className="like">
                          <span> <FontAwesomeIcon icon={faHeart} />  </span>
                          
                      </div> */}
                  <span onClick={() => removeCom(index)} className="del-icon">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default CommentBox
