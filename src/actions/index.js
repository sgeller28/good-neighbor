/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
// keys for actiontypes

import axios from 'axios';

const ROOT_URL = 'https://good-neighbor-api.herokuapp.com';
// const ROOT_URL = 'http://localhost:3000';

export const ActionTypes = {
  CREATE_POST: 'CREATE_POST',
  FETCH_POST: 'FETCH_POST',
  FETCH_POSTS: 'FETCH_POSTS',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}


export function signinUser({ email, password }, history) {
  return (dispatch) => {
    // console.log('hello');
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then((response) => {
        // console.log('hello');
        dispatch({ type: ActionTypes.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('recipient', response.data.recipient);
        history.push('/');
      })
      .catch((error) => {
        // console.log('hello');
        dispatch(authError(`Sign In Failed: ${error.response.data}`));
      });
  };
}

export function signupUser({
  email, password, firstName, lastName,
}, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, {
      email, password, firstName, lastName,
    })
      .then((response) => {
        console.log(`testing signupUser: ${response}`);
        console.log(JSON.stringify(response));
        dispatch({ type: ActionTypes.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        // localStorage.setItem('username', username);
        history.push('/');
      })
      .catch((error) => {
        dispatch(authError(`Sign Up Failed: ${error.response.data}`));
      });
  };
}

export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}
