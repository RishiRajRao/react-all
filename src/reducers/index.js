import {combineReducers} from 'redux'
import postReducer from './postReducer';
import userReducer from './userReducer';
import photoReducer from './photoReducer';
const rootReducer = combineReducers({
postReducer,userReducer,photoReducer
})

export default rootReducer;