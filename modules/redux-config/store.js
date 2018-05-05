import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import epics from './epics'
import StateLoader from "./stateLoader"
let store = null

export default (reducer, initialState = {}) => {
  const epicMiddleware = createEpicMiddleware(epics);
  const enhancers = composeWithDevTools(applyMiddleware(epicMiddleware))
  if (!store) {
    // store = createStore(reducer, initialState, enhancers)
    const stateLoader = new StateLoader();
    store = createStore(reducer, stateLoader.loadState(), enhancers)
    store.subscribe(() => {
        stateLoader.saveState(store.getState());
    })
  }
  return store
}
