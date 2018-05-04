// this initial state is used for server-side rendering as well
import { initialState as counter } from '~/counter'

// merge all initial states and export
export default Object.assign({},
  counter,
)
