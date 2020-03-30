import axios from "axios";
import { api } from "../utils/api";
import { tokenConfig } from "./AuthToken";
import { AUTH_ERROR, LOGOUT_SUCCESS, USER_LOADED, USER_LOADING, USER_REGISTER_FAILED, USER_REGISTER_LOADING, USER_REGISTER_SUCCESS, USER__LOGIN, USER__LOGIN_FAILED, USER__LOGIN_SUCCESS } from "./types";
export function userLogin(param) {
  return {
    type: USER__LOGIN,
    data: param
  };
}

export const registerUser = param => dispatch => {
  dispatch({ type: USER_REGISTER_LOADING });
  axios
    .post(`${api}/users/register/`, param)
    .then(user => {
      dispatch({
        type: USER_REGISTER_SUCCESS,
        data: user.data
      });
    })
    .catch(err => {
      dispatch({
        type: USER_REGISTER_FAILED,
        error: err
      });
    });
};

export const loginUser = param => dispatch => {
  axios
    .post(`${api}/users/login`, param)
    .then(user => {
      dispatch({
        type: USER__LOGIN_SUCCESS,
        data: user.data
      });
    })
    .catch(err => {
      dispatch({
        type: USER__LOGIN_FAILED,
        error: err
      });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get(`${api}/users/user`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        data: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: AUTH_ERROR
      });
    });
};
