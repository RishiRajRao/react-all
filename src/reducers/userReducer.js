const initialState = {
  users:[]
}

function userReducer (state=initialState,action){
  switch(action.type){
    case 'GET_USERS':{
      if(action.payload)
      return {...state,users:action.payload}
      return state;
    }
    default:return state
  }
}

export default userReducer;