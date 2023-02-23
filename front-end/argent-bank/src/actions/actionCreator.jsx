import { Types } from './actionTypes';
import API from '../services/Api';


export const ActionCreators = {
  login: (credentials) => {
    return async (dispatch) => {
      try {
        const response = await API.post('login', credentials);
        const data = await response.json();
        const token = data.body.token;
        localStorage.setItem("user", JSON.stringify(token));
        dispatch({ type: Types.LOGIN, payload: { token } });
      } catch (error) {
        // handle error
        console.log(error)
      }
    };
  },
  logout: () => {

  }
};
