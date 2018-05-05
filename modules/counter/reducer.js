/* eslint-disable fp/no-nil */
import { INCREMENT, DECREMENT } from './actions'

// if count on default initialState value, use 0 for initial value

export default (state = { test: 0 }, action) => {
  switch (action.type) {
    case INCREMENT: return { count: state.count + 1 }
    case DECREMENT: return { count: state.count - 1 }
    default: return state
  }
}
