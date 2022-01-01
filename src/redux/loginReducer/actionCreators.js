import { CHANGE_EMAIL, CHANGE_PASSWORD, SET_FETCHING } from "./const.js";

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
