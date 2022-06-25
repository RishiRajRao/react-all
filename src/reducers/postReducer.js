const initialState = {
 posts:[]
}

function postReducer(state=initialState,action)
{
  console.log("postR==",action)
  switch(action.type){
    case 'GET_POST':{
      if(action.payload)
      return {...state,posts: action.payload}
      return state;
    }
    default:return state
  }
}

export default postReducer;