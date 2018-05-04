import { combineReducers } from "redux";
//import { reducer as counter } from '~/counter'
//import { reducer as reduxFormReducer } from 'redux-form'
import { reducer as navReducer } from "~/nav";
export default combineReducers({
  // counter,
  // form: reduxFormReducer,// mounted under "form"
  navReducer,
});
