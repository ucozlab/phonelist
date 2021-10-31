import {combineReducers} from "redux";
import contactsReducer from "./contactsReducer";

// Combine Reducers
export default combineReducers({
  contactsState: contactsReducer
});
