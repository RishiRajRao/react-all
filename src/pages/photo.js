import {getPhotos} from '../actions/photoActions'
import  {connect} from 'react-redux'
import {useEffect,useState,memo,useContext} from 'react'
import {userContext} from './user'


function Photo({photoReducer:{photos},getPhotos}){
  useEffect(()=>{
    getPhotos()
  },[])
  const user = useContext(userContext)
  if(!photos) return null;
  const allPhotos = photos && photos.map(photo=>{
    const{id,title,url} = photo;
   return(
    <div key={id} className="card col-4">
    <h2 className="text-truncate">{title}</h2>
    <img src={url} alt={`pic-${id}`} />
   </div>
   )
  })
  return(
    <>
      <div>
        <p>{user?.title}</p>
      <div className="mx-auto container row mt-5">
        {allPhotos}
      </div>
      </div>
    </>
  )
}
const mapStateToProps = (state)=>{
  return state
}
export default connect(mapStateToProps, {getPhotos}) (Photo)