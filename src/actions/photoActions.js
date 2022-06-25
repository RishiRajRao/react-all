import axios from 'axios';
const GET_PHOTOS = 'GET_PHOTOS';
export const getPhotos = ()=> async(dispatch)=>{
  try{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos')
    dispatch({type:GET_PHOTOS,payload:data})
  }catch(err){
    console.error(err)
  }
}