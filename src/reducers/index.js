import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';
import { employeeFunc, employeeFuncAdd, getOneEmployee } from "./EmployeeReducers";
import { loginUser, registerUser } from "./userReducers";

export default combineReducers({
  regis: registerUser,
  user: loginUser,
  employee: employeeFunc,
  employeeAdd: employeeFuncAdd,
  getOne: getOneEmployee,
  form: reduxFormReducer
  
});
