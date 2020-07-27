import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";

import { appReducer } from "./reducers";

export default createStore(combineReducers({
    app: appReducer
}), applyMiddleware(reduxThunk))
