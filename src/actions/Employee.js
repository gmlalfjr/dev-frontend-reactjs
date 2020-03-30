import Axios from "axios";
import { ADD_EMPLOYEE_FAILED, ADD_EMPLOYEE_LOADING, ADD_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_FAILED, DELETE_EMPLOYEE_LOADING, DELETE_EMPLOYEE_SUCCESS, GET_EMPLOYEE_FAILED, GET_EMPLOYEE_LOADING, GET_EMPLOYEE_SUCCESS, GET_ONE_EMPLOYEE_FAILED, GET_ONE_EMPLOYEE_LOADING, GET_ONE_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_FAILED, UPDATE_EMPLOYEE_LOADING, UPDATE_EMPLOYEE_SUCCESS } from "../actions/types";
import { api } from "../utils/api";
import { tokenConfig } from "./AuthToken";

export const getEmployeeData = () => (dispatch, getState) => {
  dispatch({ type: GET_EMPLOYEE_LOADING });
  Axios.get(`${api}/employee/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_EMPLOYEE_SUCCESS,
        payload: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_EMPLOYEE_FAILED,
        error: err
      });
    });
};

export const addEmployee = param => (dispatch, getState) => {
  dispatch({ type: ADD_EMPLOYEE_LOADING });
  Axios.post(`${api}/employee/add`, param, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_EMPLOYEE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_EMPLOYEE_FAILED,
        error: err
      });
    });
};

export const getOne = id => (dispatch, getState) => {
  dispatch({ type: GET_ONE_EMPLOYEE_LOADING });
  Axios.get(`${api}/employee/get/` + id, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_ONE_EMPLOYEE_SUCCESS,
        payload: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ONE_EMPLOYEE_FAILED,
        error: err
      });
    });
};

export const updateData = (id, param) => (dispatch, getState) => {
  dispatch({ type: UPDATE_EMPLOYEE_LOADING });
  Axios.put(`${api}/employee/update/` + id, param, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: UPDATE_EMPLOYEE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_EMPLOYEE_FAILED,
        error: err
      });
    });
};

export const deleteEmployee = id => (dispatch, getState) => {
  dispatch({ type: DELETE_EMPLOYEE_LOADING });
  Axios.delete(`${api}/employee/delete/` + id, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_EMPLOYEE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: DELETE_EMPLOYEE_FAILED,
        error: err
      });
    });
};
