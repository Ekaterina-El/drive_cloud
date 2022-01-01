import {
  SET_SELECTED_FILES,
  CHANGE_POST_TITLE,
  CHANGE_IS_FETCHING,
} from "./const.js";

export const setSelectedFiles = (files) => ({
  type: SET_SELECTED_FILES,
  payload: {
    files,
  },
});

export const changePostTitle = (value) => ({
  type: CHANGE_POST_TITLE,
  payload: {
    value,
  },
});

export const changeIsFetching = (value) => ({
  type: CHANGE_IS_FETCHING,
  payload: {
    value,
  },
});
