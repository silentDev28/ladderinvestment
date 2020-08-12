import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";
import rootReducer from "./rootReducer";
const logger = [Logger];
const store = createStore(rootReducer, applyMiddleware(...logger));
export default store;
