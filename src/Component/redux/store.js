import { createStore,applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(logger,thunk)))

export default store;
