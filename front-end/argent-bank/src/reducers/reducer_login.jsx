
import { Types } from '../actions/actionTypes';



const token = localStorage.getItem("token")


const initialState = token
    ? {
        token: JSON.parse(token),
        error: false,
        isRemember: true,
        isConnected: true,
    }
    : {
        token: null,
        error: false,
        isRemember: false,
        isConnected: false,
    };


const reducer_login = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGIN:
            return {
                ...state,
                token: action.payload.token,
                isConnected: true
            }
        case Types.LOGOUT:
            return {
                ...state,
                token: null,
                isConnected: false,
                error: false,
            }
        case Types.REMEMBER:
            return {
                ...state,
                isRemember: true,
            }
        case Types.ERROR:
            return {
                ...state,
                error: true,
            }
        default:
            return state;
    }
}

export default reducer_login