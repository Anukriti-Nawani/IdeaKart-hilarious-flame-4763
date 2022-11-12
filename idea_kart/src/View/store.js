import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import viewReducer from "./viewReducer";

const rootReducer=combineReducers({
    views : viewReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))