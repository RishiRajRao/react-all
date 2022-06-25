import { legacy_createStore as createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk'


// const middlewares = [thunk];

const rootStore = createStore(
  rootReducer,applyMiddleware(...thunk)
  )

// console.log("state1==",rootStore.getState())
 rootStore.subscribe(()=>console.log("store-subscribe==",rootStore.getState()))

export default rootStore;