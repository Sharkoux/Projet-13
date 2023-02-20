import Login from '../page/login';
import { Types } from '../actions/actionTypes';

const initialState = {


    profil: {
        username: '',
        password: '',
        token: null,
    },
    error: null,
    isConnected: false,


}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:

            return {

            }

    }

    export default reducer;