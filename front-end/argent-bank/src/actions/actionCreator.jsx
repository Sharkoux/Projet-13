import { Types } from './actionTypes';
import API from '../services/Api';



export const ActionCreators = {
  login: (header, credentials, remember) => {
    return async (dispatch) => {
      try {
        const response = await API.post('login', header , credentials);
        const data = await response.json();
        const token = data.body.token;
        
        dispatch({ type: Types.LOGIN, payload: { token } });
        if(remember) {
          localStorage.setItem("token", JSON.stringify(token));
        }
      } catch (error) {
        // handle error
        dispatch({type: Types.ERROR})
      }
      
    };
  },
  logout: () => {
      localStorage.removeItem('token');
      return {type: Types.LOGOUT}
  },
  remember: () => {
    return {type: Types.REMEMBER}
  },
  profil: (header) => {
    return async (dispatch) => {
      try {
        const response = await API.post('profile', header);
        const data = await response.json();
        const profilUser = data.body
        dispatch({ type: Types.PROFIL, payload: { profilUser } });
      } catch (error) {
        // handle error
        console.log(error)
      }
    };
  },

};
