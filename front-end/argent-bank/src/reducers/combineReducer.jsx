//import reducer
import reducer_login from "./reducer_login";
import reducer_user from "./reducer_user";
import {combineReducers} from 'redux';

//combine 2 reducer 
const allReducers = combineReducers({
    login: reducer_login,
    profil: reducer_user
})

export default allReducers