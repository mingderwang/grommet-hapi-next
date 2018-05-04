import { combineReducers } from "redux";
//import { reducer as counter } from '~/counter'
//import { reducer as reduxFormReducer } from 'redux-form'
import { reducer as navReducer } from "~/nav";
import { reducer as counterReducer } from '~/counter'
export default combineReducers({
  // counter,
  // form: reduxFormReducer,// mounted under "form"
  navReducer,
  counterReducer,
});
