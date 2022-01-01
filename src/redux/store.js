import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./authReducer";
import filesReducer from "./filesReducer";
import { loginReducer } from "./loginReducer";
import signUpReducer from "./signUpReducer";

const reducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  signUp: signUpReducer,
  files: filesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
