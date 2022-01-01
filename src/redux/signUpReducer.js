import AuthAPI from "../api/AuthAPI";
import { setUserProfile } from "./authReducer";

const initState = {
  name: "",
  email: "",
  password: "",
  repPass: "",
  isFetching: false,
  error: "",
};

const signUpReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: payload.value,
      };

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

    case SET_ERROR: {
      debugger
      return {
        ...state,
        error: payload.error,
      };
    }

    default:
      return state;
  }
};

const CHANGE_NAME = "SIGN_UP_CHANGE_NAME";
const CHANGE_EMAIL = "SIGN_UP_CHANGE_EMAIL";
const CHANGE_PASSWORD = "SIGN_UP_CHANGE_PASSWORD";
const CHANGE_REP_PASS = "SIGN_UP_CHANGE_REP_PASS";
const SET_FETCHING = "SIGN_UP_SET_FETCHING";
const SET_ERROR = "SIGN_UP_SET_ERROR";

export const changeName = (value) => ({
  type: CHANGE_NAME,
  payload: { value },
});

export const changeEmail = (value) => {
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

export const setError = (error) => ({
  type: SET_ERROR,
  payload: { error },
});

export const clearError = () => setError("")

export const setFetching = (status) => ({
  type: SET_FETCHING,
  payload: { status },
});

const validate = (name, email, password, repPass) => {
  let error = "";

  if (name.length < 3) {
    error = "Длина имени должна быть больше 3";
  } else if (email.length < 5) {
    error = "Невалидная почта";
  } else if (password.length < 8) {
    error = "Длина пароля должна быть больше-равна 8";
  } else if (password !== repPass) {
    error = "Пароли не совпадают";
  }

  return error;
};

export const signUpUser = () => (dispatch, getState) => {
  const { name, email, password, repPass } = getState().signUp;

  debugger
  const error = validate(name, email, password, repPass);
  if (error !== "") {
    dispatch(setError(error));
    return
  }

  dispatch(setFetching(true));

  const profile = {
    email,
    name,
    uid: null,
  };

  AuthAPI.signUpUser(profile, password).then((profile) => {
    dispatch(setUserProfile(profile));
    dispatch(setFetching(false));
  });
};

export default signUpReducer;
