import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./authReducer";

const reducer = combineReducers({
    auth: authReducer
})

const store = createStore(reducer, applyMiddleware(thunk))
export default store