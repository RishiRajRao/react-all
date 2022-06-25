const initialState = {
  photo :[]
}

export default function photoReducer(state=initialState,action){
    switch(action.type){
      case 'GET_PHOTOS' :{
        if(action.payload)
        return {...state, photos:action.payload}
        return state;
      }
      default : return state;
    }
}