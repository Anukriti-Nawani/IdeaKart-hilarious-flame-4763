import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./redux_s/authReducer";

import viewReducer from "./viewNow/viewReducer";
import { productReducer } from "./Dasboard/redux_a/prod.reducer";

const rootreducers = combineReducers({
  auth: authReducer,
  views: viewReducer,
  prod: productReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootreducers,
  createComposer(applyMiddleware(thunk))
);
