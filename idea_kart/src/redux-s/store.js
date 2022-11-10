import {legacy_createStore, compose, combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer";

const rootreducers = combineReducers({
    auth: authReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootreducers, createComposer(applyMiddleware(thunk)));
