import { Types } from './actionTypes';
import API from '../services/Api';


export const ActionCreators = {
  login: (credentials) => {
    return async (dispatch) => {
      try {
        const response = await API.post('login', credentials);
        const token = response.data.token;
        console.log(response)
        dispatch({ type: Types.LOGIN, payload: { token } });
      } catch (error) {
        // handle error
        console.log(error)
      }
    };
  }
};
