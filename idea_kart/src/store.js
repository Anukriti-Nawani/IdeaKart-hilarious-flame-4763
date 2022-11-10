// import { legacy_createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { reducer } from "./reducer";
// import { authReducer } from "../redux_s/authReducer";

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk)
//   // other store enhancers if any
// );

// export const store = legacy_createStore(reducer, enhancer);



import {legacy_createStore, compose, combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./redux_s/authReducer";

import { reducer } from "./redux/reducer";

const rootreducers = combineReducers({
    auth: authReducer,
    reducer: reducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootreducers, createComposer(applyMiddleware(thunk)));