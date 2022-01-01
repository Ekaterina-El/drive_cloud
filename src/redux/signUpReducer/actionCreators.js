import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_NAME,
  CHANGE_REP_PASS,
  SET_ERROR,
  SET_FETCHING,
} from "./const.js";

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

export const clearError = () => setError("");

export const setFetching = (status) => ({
  type: SET_FETCHING,
  payload: { status },
});
