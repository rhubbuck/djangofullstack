import axios from "axios";
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

// check token and load user
export const loadUser = () => (dispatch, getState) => {
    // is loading
    dispatch({ type: USER_LOADING }); 

     // get token
    const token = getState().auth.token;

    // Headers
    const config = { 
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // if token, add to headers config
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    
    axios.get('/api/auth/user', config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
            console.log(err);
            dispatch({
                type: AUTH_ERROR
            });
        });
}


// LOGIN USER
export const login = (username, password) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    // Request Body
    const body = JSON.stringify({ username, password });
  
    axios
      .post('/api/auth/login', body, config)
      .then(res => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  };

  // logout user
  export const logout = () => (dispatch, getState) => {
  
     // get token
    const token = getState().auth.token;

    // Headers
    const config = { 
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // if token, add to headers config
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    
    axios.post('/api/auth/logout', null, config)
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        }).catch(err => {
            console.log(err);
        });
}

// set up config with token (helper for private routes)
export const tokenConfig = getState => {
    
     // get token
     const token = getState().auth.token;

     // Headers
     const config = { 
         headers: {
             'Content-Type': 'application/json'
         }
     }
     // if token, add to headers config
     if(token) {
         config.headers['Authorization'] = `Token ${token}`;
     }
    return config; 
};

// register USER
export const register = ({ username, email, password }) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    // Request Body
    const body = JSON.stringify({ username, email, password });
  
    axios
      .post('/api/auth/register', body, config)
      .then(res => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: REGISTER_FAIL,
        });
      });
  };