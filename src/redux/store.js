import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./authReducer";
import { postsReducer } from "./postsReducer";
import { loginReducer } from "./loginReducer";
import { signUpReducer } from "./signUpReducer";

const reducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  signUp: signUpReducer,
  files: postsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
