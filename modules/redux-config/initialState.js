// this initial state is used for server-side rendering as well
import { initialState as counter } from '~/counter'
import { initialState as animate } from '~/animateTest'
import { initialState as nav } from '~/nav'

// merge all initial states and export
export default Object.assign({},
  nav,
  counter,
  animate,
)
