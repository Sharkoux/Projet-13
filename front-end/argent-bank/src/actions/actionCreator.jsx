import { Types } from './actionTypes';
import API from '../services/Api';
import { useSelector } from 'react-redux';


export const ActionCreators = {
  login: (credentials, remember) => {
    return async (dispatch) => {
      try {
        
        const response = await API.post('login', credentials);
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
  callprofil: (token) => {
    return async (dispatch) => {
      try {
        const response = await API.post('profil', token);
        const data = await response.json();
        dispatch({ type: Types.CALLPROFIL, payload: { data } });
      } catch (error) {
        // handle error
        console.log(error)
      }
    };
  },
  remember: () => {
    return {type: Types.REMEMBER}
  }

};
