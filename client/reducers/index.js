import {combineReducers} from "redux";
import contactsReducer from "./contactsReducer";
import generalReducer from "./generalReducer";
import contactModalReducer from "./contactModalReducer";

// Combine Reducers
export default combineReducers({
  contactsState: contactsReducer,
  generalState: generalReducer,
  contactModalState: contactModalReducer,
});
