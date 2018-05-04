// this initial state is used for server-side rendering as well
//import { initialState as counter } from '~/counter'
import { initialState as nav } from "~/nav";
import { initialState as counter } from '~/counter'
// merge all initial states and export
export default Object.assign(
  {},
  nav,
  counter,
);
