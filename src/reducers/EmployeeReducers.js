import { ADD_EMPLOYEE_FAILED, ADD_EMPLOYEE_LOADING, ADD_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_FAILED, DELETE_EMPLOYEE_LOADING, DELETE_EMPLOYEE_SUCCESS, GET_EMPLOYEE_FAILED, GET_EMPLOYEE_LOADING, GET_EMPLOYEE_SUCCESS, GET_ONE_EMPLOYEE_FAILED, GET_ONE_EMPLOYEE_LOADING, GET_ONE_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_FAILED, UPDATE_EMPLOYEE_LOADING, UPDATE_EMPLOYEE_SUCCESS } from "../actions/types";
const initState = {
  data: [],
  isLoading: false,
  error: false
};

export function employeeFunc(state = initState, action) {
  switch (action.type) {
    case GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false
      };

    case GET_EMPLOYEE_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
        data: [],
        isAuthenticated: true
      };

    case GET_EMPLOYEE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
        data: [],
        isAuthenticated: false,
        addDataSucess: false
      };

    default:
      return state;
  }
}

export function employeeFuncAdd(state = initState, action) {
  switch (action.type) {
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false,
        addDataSucess: true
      };

    case ADD_EMPLOYEE_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
        data: {},
        addDataSucess: false
      };

    case ADD_EMPLOYEE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
        data: {},
        addDataSucess: false
      };

    default:
      return state;
  }
}

const initStateUpdate = {
  data: {},
  isLoading: false,
  error: false,
  isUpdated: false,
  isDeleted: false
};

export function getOneEmployee(state = initStateUpdate, action) {
  switch (action.type) {
    case GET_ONE_EMPLOYEE_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
        data: {}
      };
    case GET_ONE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false,
        isUpdated: false
      };

    case GET_ONE_EMPLOYEE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
        data: {}
      };

    case UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false,
        isUpdated: true
      };

    case UPDATE_EMPLOYEE_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
        data: [],
        isUpdated: false
      };

    case UPDATE_EMPLOYEE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
        data: {},
        isUpdated: false
      };

    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false,
        isDeleted: true
      };

    case DELETE_EMPLOYEE_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
        data: {},
        isDeleted: false
      };

    case DELETE_EMPLOYEE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
        data: {},
        isDeleted: false
      };

    default:
      return state;
  }
}
