import { Types } from './actionTypes';
import API from '../services/Api';



export const ActionCreators = {
  login: (header, credentials, remember) => {
    return async (dispatch) => {
      try {
        const response = await API.post('login', header, credentials);
        const data = await response.json();
        const token = data.body.token;

        dispatch({ type: Types.LOGIN, payload: { token } });
        if (remember) {
          localStorage.setItem("token", JSON.stringify(token));
        }
      } catch (error) {
        // handle error
        dispatch({ type: Types.ERROR })
      }

    };
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('profil');
    return { type: Types.LOGOUT }
  },
  remember: () => {
    return { type: Types.REMEMBER }
  },
  profil: (header, remember) => {
    return async (dispatch) => {
      try {
        const response = await API.post('profile', header);
        const data = await response.json();
        const profilUser = data.body
        dispatch({ type: Types.PROFIL, payload: { profilUser } });
        if (remember) {
          localStorage.setItem("profil", JSON.stringify(profilUser));
        }
      } catch (error) {
        // handle error
        console.log(error)
      }
    };
  },
  update: (header, body, remember) => {
    return async (dispatch) => {
      try {
        const response = await API.put('profile', header, body);
        const data = await response.json();
        console.log(data)
        const profilUser = data.body
        dispatch({ type: Types.UPDATE, payload: { profilUser } });
        if (remember) {
          localStorage.setItem("profil", JSON.stringify(profilUser));
        }
      } catch (error) {
        // handle error
        console.log(error)
      }
    };
  }
};
