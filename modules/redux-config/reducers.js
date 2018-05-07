import { combineReducers } from 'redux'
import { reducer as counter } from '~/counter'
import { reducer as animate } from '~/animateTest'
import { reducer as nav } from '~/nav'

export default combineReducers({
  nav,
  counter,
  animate,
})
