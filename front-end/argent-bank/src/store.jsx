
import  reducer_login  from './reducers/reducer_login'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const store = createStore(
    reducer_login,
    applyMiddleware(thunk)
)

export default store