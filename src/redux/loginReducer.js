import AuthAPI from "../api/AuthAPI";
import { setUserProfile } from "./authReducer/actionCreators";

const initState = {
  email: "",
  password: "",
  isFetching: false,
};

const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: payload.value,
      };

    case CHANGE_PASSWORD:
      return {
        ...state,
        password: payload.value,
      };

    case SET_FETCHING:
      return {
        ...state,
        isFetching: payload.status,
      };

    default:
      return state;
  }
};

const CHANGE_EMAIL = "CHANGE_EMAIL";
const CHANGE_PASSWORD = "CHANGE_PASSWORD";
const SET_FETCHING = "SET_FETCHING";

export const changeEmail = (value) => {
  debugger;
  return {
    type: CHANGE_EMAIL,
    payload: { value },
  };
};

export const changePassword = (value) => ({
  type: CHANGE_PASSWORD,
  payload: { value },
});

export const setFetching = (status) => ({
  type: SET_FETCHING,
  payload: { status },
});

export const loginUser = () => (dispatch, getState) => {
  const { email, password } = getState().login;
  dispatch(setFetching(true));

  AuthAPI.signInUser(
    email,
    password,
    (profile) => {
      dispatch(setUserProfile(profile));
      dispatch(setFetching(false));
    },
    (error) => {
      alert(error);
      dispatch(setFetching(false));
    }
  );
};

export default loginReducer;
