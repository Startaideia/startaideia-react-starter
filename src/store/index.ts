import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/* Store reducers */
import authReducer from "./auth/auth.reducer";

const reducers = combineReducers({
  auth: authReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools({ trace: true })(applyMiddleware(thunk))
);

export default store;

/* Exports actions */
export { default as authActions } from "./auth/auth.actions";
