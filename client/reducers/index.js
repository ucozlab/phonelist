import {combineReducers} from "redux";
import contactsReducer from "./contactsReducer";
import generalReducer from "./generalReducer";

// Combine Reducers
export default combineReducers({
  contactsState: contactsReducer,
  generalState: generalReducer
});
