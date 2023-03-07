
import { Types } from '../actions/actionTypes';






const initialState = {
    profil: {

    }
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

        default:
            return state;
    }
}

export default reducer_user