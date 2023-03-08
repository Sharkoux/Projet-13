
import { Types } from '../actions/actionTypes';






const initialState = {
    profil: {

    },
    error: null,
    message: null
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
                message: action.payload.message
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

export default reducer_user