
import reducer_login from './reducers/reducer_login'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer_user from './reducers/reducer_user';
import allReducers from './reducers/combineReducer';

const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  )
)

export default store