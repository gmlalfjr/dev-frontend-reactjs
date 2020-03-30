import { USER_LOADING, USER_REGISTER_FAILED, USER_REGISTER_LOADING, USER_REGISTER_SUCCESS, USER__LOGIN_FAILED, USER__LOGIN_SUCCESS } from "../actions/types";

const initState = {
  data: [],
  error: false,
  isLoading: false,
  isSuccess: false
};

export function registerUser(state = initState, action) {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.data,
        isSuccess: true
      };
    case USER_REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
        isSuccess: false
      };
    case USER_REGISTER_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
        isSuccess: false
      };
    default:
      return state;
  }
}

const loginState = {
  token: localStorage.getItem("token"),
  data: {},
  isAuthenticated: false,
  error: false,
  isLoading: false,
  login: null,
  isLogout: false
};
export function loginUser(state = loginState, action) {
  switch (action.type) {
    case USER__LOGIN_SUCCESS:
      localStorage.setItem("token", action.data.token);
      return {
        ...state,
        isLoading: false,
        error: false,
        ...action.data,
        isSuccess: true,
        isAuthenticated: true,
        isLogout: false
      };
    case USER__LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
        isSuccess: false,
        isAuthenticated: false,
        isLogout: false
      };
    case "LOGOUT_SUCCESS":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        data: null,
        isAuthenticated: false,
        isLoading: false,
        login: null,
        isLogout: true
      };
    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        login: action.data,
        isLogout: false
      };
    case "AUTH_ERROR":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false
      };
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
