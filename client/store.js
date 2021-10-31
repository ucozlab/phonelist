import {createStore, compose} from "redux";

import reducers from "./reducers";

const createStoreWithMiddleware = compose()(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
