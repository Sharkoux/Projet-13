
import reducer_login from './reducers/reducer_login'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer_login,
  composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  )
)

export default store