
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers/combineReducer';

const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  )
)

export default store