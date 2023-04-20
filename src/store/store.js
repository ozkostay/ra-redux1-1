import { combineReducers, compose, legacy_createStore } from "redux";
import numberReduser from '../reduser/numberReduser';

const ReactReduserDevTools = window.
__REDUX_DEVTOOLS_EXTENSION__ && window.
__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers(
      {
        number: numberReduser,
      }
    ),
    compose(ReactReduserDevTools)
  );
}

export default configureStore;
