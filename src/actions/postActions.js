import axios from 'axios';
const GET_POST = 'GET_POST';

export const getPost = ()=> async(dispatch)=>{
  try{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log("postA==",data)
    dispatch({type:GET_POST,payload:data})
  }catch(err){
    console.error(err)
  }
}