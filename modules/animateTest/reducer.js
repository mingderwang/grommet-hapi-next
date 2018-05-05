/* eslint-disable fp/no-nil */
import { TOGGLE } from './actions'

// if count on default initialState value, use 0 for initial value

export default (state = { toggle: true }, action) => {
  switch (action.type) {
    case TOGGLE: return { toggle: !state.toggle }
    default: return state
  }
}
