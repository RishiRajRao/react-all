import axios from 'axios';
 export const getUsers = (payload) => async (dispatch) =>{
   try{
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  //  console.log("res==",data)
    dispatch({type:'GET_USERS',payload:data})
   }
   catch(err){
    console.log("err==",err)
   }
  
}


// export const loadUserData = (uid) => async (dispatch) => {
//   try {
//       dispatch({ type: USERDATA_REQUEST });
//       let { data } = await request.get(`/users/${uid}`);
//       dispatch({ type: USERDATA_SUCCESS, data });
//   } catch(error) {
//       dispatch({ type: USERDATA_ERROR, error });
//   }
// }