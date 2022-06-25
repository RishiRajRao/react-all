import {getPost} from '../actions/postActions'
import {connect} from 'react-redux'
import {useEffect,useState} from 'react'
 function Post({postReducer:{posts},getPost,onSelectUser}){

  useEffect(()=>{
    getPost()
  },[getPost])

  function selectUser(post){
   return onSelectUser?onSelectUser(post):false
  }

  if(!posts) return null;
  const allPost = posts && posts.map(post=>{
   return(
    <div className="col-4 card text-center" key={post.id} onClick={()=>selectUser(post)}>
    <h6>{post.id}</h6>
    <p>{post.title}</p>
  </div>
   )
  })

  return(
    <>
      <div className="container row mt-5 mx-auto">
        {allPost}
      </div>
    </>
  )
}

const mapStateToProps = (state)=>{
  console.log("post==",state)
  return state;
}


export default connect(mapStateToProps,{getPost})(Post)

