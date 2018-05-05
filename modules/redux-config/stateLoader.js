'use strict'

export default class StateLoader {

    loadState() {
        try {
            let serializedState = localStorage.getItem("http://b44.vrecle.com:state");

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("http://b44.vrecle.com:state", serializedState);

        }
        catch (err) {
        }
    }

    initializeState() {
        return {
              //state object
            }
    }
  }
