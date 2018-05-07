import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import epics from './epics'
import StateLoader from "./stateLoader"
let store = null

const disable = true;

export default (reducer, initialState) => {
  const epicMiddleware = createEpicMiddleware(epics);
  const enhancers = composeWithDevTools(applyMiddleware(epicMiddleware))

  if (disable) {
     console.log(initialState)
     store = createStore(reducer, initialState, enhancers)
  }
  if (!store) {
    const stateLoader = new StateLoader();
    store = createStore(reducer, stateLoader.loadState(), enhancers)
    store.subscribe(() => {
        stateLoader.saveState(store.getState());
    })
  }
  return store
}
