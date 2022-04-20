import { combineReducers } from "redux-immutable";

import demo from "./demoReducer";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    demo,
  });

export default createRootReducer;
