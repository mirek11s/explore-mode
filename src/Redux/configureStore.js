import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import explorerReducer from "./reducer/explorer";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  data: explorerReducer,
});

const sagaMiddleware = createSagaMiddleware();

//for now we have only one but for futere add more here:
const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

//calling from the root saga and whatever is below will constantly run in the background and listen for any actions
sagaMiddleware.run(watcherSaga);

export default store;
