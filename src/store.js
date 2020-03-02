import { applyMiddleWare, compose, createStore } from "redux";
import thunk from "react-thunk";
import { createBrowserHistory } from "history";
import rootReducer from "./reducers";
import { combineReducers } from "redux";

export const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
