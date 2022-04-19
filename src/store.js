import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const routerHistoryMiddleware = routerMiddleware(history);

const store = createStore(
  createRootReducer(history),
  composeWithDevToolsDevelopmentOnly(
    applyMiddleware(sagaMiddleware, routerHistoryMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

// Access to the store from console
window.store = () => store.getState().toJS();

export { history };
export default store;
