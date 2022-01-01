import {
  SET_SELECTED_FILES,
  CHANGE_POST_TITLE,
  CHANGE_IS_FETCHING,
  SET_CURRENT_POST_DATA,
  SET_CURRENT_POST_FILES,
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

export const setCurrentPostData = (data) => ({
  type: SET_CURRENT_POST_DATA,
  payload: {
    data,
  },
});

export const setCurrentPostFiles = (files) => ({
  type: SET_CURRENT_POST_FILES,
  payload: {
    files,
  },
});
