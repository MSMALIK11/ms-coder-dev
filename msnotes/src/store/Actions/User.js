import axios from 'axios';


let URL = "http://localhost:8080";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
export const userLogin=(user)=>async(dispatch)=>{

    try {
        dispatch({
            type:"LoginRequest"
        })
        const { data } = await axios.post(`${URL}/api/v1/login`, user, config);
        
        console.log('login api call cookie token',data)
        window.localStorage.setItem('token',JSON.stringify(data.token))
        dispatch({
            type:"LoginSuccess",
            paylaod:data.user
            
        })
        
    } catch (error) {
        // dispatch({
        //     type:"LoginFail",
        //     payload:error
        // })
    }

}

// user signup 
export const userSignup=(user)=> async(dispatch)=>{
    try {
        dispatch({
            type:"RegisterRequest"
        });
        const { data } = await axios.post(
          `${URL}/api/v1/signup`,
          { user },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
    
        dispatch({
          type: "RegisterSuccess",
          payload: data.user,
        });
        
    } catch (error) {
        
    }

}

// load user
export const loadUser=()=>async(dispatch)=>{

    try {
        dispatch({
          type: "LoadUserRequest",
        });
        const { data } = await axios.get(
          `${URL}/api/v1/me`,config,{credensials:true});
       
        dispatch({
          type: "LoadUserSuccess",
          payload: data.user,
        });

        
    } catch (error) {
        // dispatch({
        //   type: "LoadUserFail",
        //   paylaod:error,
        // });
        
    }


}

// get following users post 
export const getFollowingPost=()=>async(dispatch)=>{
   dispatch({
     type: "postFollowingRequest",
   });

       const { data } = await axios.get(`${URL}/api/v1/post`, config, {
         credensials: true,
       });

     
dispatch({
  type: "postFollowingSuccess",
  payload: data.posts,
});



}
// get all following users 

export const fetchAllUsers=()=>async(dispatch)=>{

try {
  
dispatch({type:"getAllUsersRequest"});
const {data}=await axios.get(`${URL}/api/v1/users`);

dispatch({
  type:"getAllUsersSuccess",
  paylaod:data.users

})

} catch (error) {
  
}

}