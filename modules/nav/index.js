import * as navActions from './actions'
import navReducer from './reducer'
import Container from './containers/NavSidebar'
import state from './initialState'

export const actions = navActions
export const reducer = navReducer
export const NavSidebar = Container
export const initialState = state
