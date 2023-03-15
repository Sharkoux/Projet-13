
import { Types } from '../actions/actionTypes';






const initialState = {
    profil: {

    },
    error: false,
    newUser: "",
}


const reducer_user = (state = initialState, action) => {
    switch (action.type) {
        case Types.PROFIL:
            return {
                ...state,
                profil: action.payload.profilUser
            }
        case Types.UPDATE:
            return {
                ...state,
                profil: action.payload.profilUser
            }
        case Types.SIGNUP:
            return {
                ...state,
                error: false,
                newUser: action.payload.profil.email
            }
        case Types.LOGOUT: 
            return {
                ...state,
                newUser: ""
            }
        case Types.ERROR:
            return {
                ...state,
                error: true
            }

        default:
            return state;
    }
}

export default reducer_user