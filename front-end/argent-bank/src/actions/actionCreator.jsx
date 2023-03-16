//import actionType and class API
import { Types } from './actionTypes';
import API from '../services/Api';


// Function Action creator that creates and returns a redux action
export const ActionCreators = {
  //Action Login, use API for login ()
  login: (header, credentials, remember) => {
    return async (dispatch) => {
      try {
        const response = await API.post('login', header, credentials);
        const data = await response.json();
        const token = data.body.token;
        // if login success, send new state to reducer
        dispatch({ type: Types.LOGIN, payload: { token } });
        //if(remember: true) save token in localstorage
        if (remember) {
          localStorage.setItem("token", JSON.stringify(token));
        }
      } catch (error) {
        // handle error
        dispatch({ type: Types.ERROR })
      }

    };
  },
  // Action Logout 
  logout: () => {
    // remove token and profil data from localstorage
    localStorage.removeItem('token');
    localStorage.removeItem('profil');
    return { type: Types.LOGOUT }
  },
  // Action remember 
  remember: () => {
    return { type: Types.REMEMBER }
  },
  // Action profil, use API to retrieve data profil
  profil: (header, remember) => {
    return async (dispatch) => {
      try {
        const response = await API.post('profile', header);
        const data = await response.json();
        const profilUser = data.body
        //if call profil API success, send new state to reducer
        dispatch({ type: Types.PROFIL, payload: { profilUser } });
        //if remember save profilUser in localstorage
        if (remember) {
          localStorage.setItem("profil", JSON.stringify(profilUser));
        }
      } catch (error) {
        // handle error
        console.log(error)
      }
    };
  },
  // Action update, use put API to modify data profil
  update: (header, body, remember) => {
    return async (dispatch) => {
      try {
        const response = await API.put('profile', header, body);
        const data = await response.json();
        const profilUser = data.body
        //if update success, send new state to reducer
        dispatch({ type: Types.UPDATE, payload: { profilUser } });
        //if remember save profilUser in localstorage
        if (remember) {
          localStorage.setItem("profil", JSON.stringify(profilUser));
        }
      } catch (error) {
        // handle error
        console.log(error)
      }
    };
  },
  // Action signup, use API to signup new user
  signup: (header, body) => {
    return async (dispatch) => {
      try {
        const response = await API.post('signup', header, body);
        const data = await response.json()
        const profil = data.body
        //if signup success, send new profil state
        dispatch({ type: Types.SIGNUP, payload: { profil } });
      } catch (error) {
        // handle error

        dispatch({ type: Types.ERROR })
      }
    }
  }

};
