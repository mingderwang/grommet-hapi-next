// this initial state is used for server-side rendering as well
import { initialState as counter } from '~/counter'
import { initialState as animate } from '~/animateTest'

// merge all initial states and export
export default Object.assign({},
  animate,
  counter,
)
