import { combineReducers, compose, legacy_createStore } from "redux";
import numberReduser from '../reduser/numberReduser';
import phoneFormReduser from "../reduser/phoneFormReduser";
import PhoneRepairList from "../components/PhoneRepairList";

const ReactReduserDevTools = 
window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers(
      {
        number: numberReduser,
        repair: phoneFormReduser,
      }
    ),
    compose(ReactReduserDevTools)
  );
}
        //price: priceReduser,
export default configureStore;
