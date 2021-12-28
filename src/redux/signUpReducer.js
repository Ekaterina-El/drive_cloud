import { AuthAPI } from "../api/api";
import { setUserProfile } from "./authReducer";

const initState = {
  email: "",
  password: "",
  repPass: "",
  isFetching: false,
};

const signUpReducer = (state = initState, { type, payload }) => {
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

    case CHANGE_REP_PASS:
      return {
        ...state,
        repPass: payload.value,
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

const CHANGE_EMAIL = "SIGN_UP_CHANGE_EMAIL";
const CHANGE_PASSWORD = "SIGN_UP_CHANGE_PASSWORD";
const CHANGE_REP_PASS = "SIGN_UP_CHANGE_REP_PASS";
const SET_FETCHING = "SIGN_UP_SET_FETCHING";

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

export const changeRepPass = (value) => ({
  type: CHANGE_REP_PASS,
  payload: { value },
});

export const setFetching = (status) => ({
  type: SET_FETCHING,
  payload: { status },
});

export const signUpUser = () => (dispatch, getState) => {
  const { email, password, repPass } = getState().signUp;
  dispatch(setFetching(true));

  const profile = {
    email,
    login: email.split("@")[0],
    id: null
  };

  AuthAPI.signUpUser(profile, password).then((profile) => {
    debugger
    dispatch(setUserProfile(profile))
    dispatch(setFetching(false));
  });

};

export default signUpReducer;
