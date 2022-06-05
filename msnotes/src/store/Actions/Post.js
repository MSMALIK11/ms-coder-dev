import axios from 'axios';

let URL = "http://localhost:8080";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};



export const likePost=(id)=>async(dispatch)=>{
    try {
        dispatch({type:"likeRequest"});

        const {data}=await axios.get(`${URL}/api/v1/post/likes/${id}`,config,{  credensials: true});
        dispatch({
            type:"likeSuccess",
            payload:data.message
        })
        
    } catch (error) {
         
        
    }
}
