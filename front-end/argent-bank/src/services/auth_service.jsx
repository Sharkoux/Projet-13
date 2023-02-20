import API from '../API/Api'

const login = (username, password) => {
    return API.post('/login', {username, password})
    .then(response => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
    
          return response.data;
    })
}

const signup = (username, email, password) => {
    return API.post('/signup', {username, email, password})
}




const logout = () => {
    localStorage.removeItem("user");
  };

  export default {
    login,
    signup,
    logout,
  };