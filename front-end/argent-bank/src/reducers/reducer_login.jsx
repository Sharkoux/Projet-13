import Login from '../page/login';
import { Types } from '../actions/actionTypes';
import { ActionCreators } from '../actions/actionCreator';


const initialState = {
    token: null,
    error: null,
    isConnected: false,
}

const reducer_login = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGIN:
            return {
                ...state,
                token: action.payload.token,
                isConnected: true
            }
        default:
            return state;
    }
}

export default reducer_login