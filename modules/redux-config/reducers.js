import { combineReducers } from 'redux'
import { reducer as counter } from '~/counter'
import { reducer as animate } from '~/animateTest'

export default combineReducers({
  counter,
  animate,
})
