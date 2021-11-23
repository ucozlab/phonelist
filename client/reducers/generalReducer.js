import * as types from "../actions/actionTypes";

const generalState = {
  showLoader: false,
};

export default function (state = generalState, action) {
  switch (action.type) {
    case types.SET_SHOW_LOADER:
      return Object.assign({}, state, {
        ...action.payload
      });
    default:
      return state
  }
};
