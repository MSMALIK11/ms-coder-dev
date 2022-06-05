import axios from 'axios';

let URL = "http://localhost:8080";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const crediansial = { credensials: true };

export const getSinglePost=(id)=>async(dispatch)=>{

   try {
        dispatch({
          type: "singlePostRequest",
        });

        const { data } = await axios.get(
          `${URL}/api/v1/post/${id}`,
          config,
          crediansial
        );
        console.log("res single  post data", data);
        dispatch({
          type: "singlePostSuccess",
          payload: data.post,
        });
       
   } catch (error) {
    
       
   }

}



export const doComentOnPost=(message,id)=>async(dispatch)=>{
    dispatch({type:"doCommentRequest"});


    const { data } = axios.put(
      `${URL}/api/v1/post/comment/${id}`,
      {message},
      config,
      crediansial
    );
    console.log('comment response ',data);

    dispatch({
      type: "doCommentSuccess",
      payload: data,
    });


}