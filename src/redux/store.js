import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";

const reducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
