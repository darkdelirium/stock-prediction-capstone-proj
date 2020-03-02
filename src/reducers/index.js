import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import testValue from "./test.js";

const rootReducer = history =>
  combineReducers({
    testValue,
    router: connectRouter(history)
  });

export default rootReducer;
