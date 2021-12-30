import { PostAPI } from "../api/filesAPI";

const initState = {
  newPost: {
    selectedFiles: [],
    postTitle: "",
    isFetching: false,
  },
};

const filesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_FILES: {
      return {
        ...state,
        newPost: {
          ...state.newPost,
          selectedFiles: payload.files,
        },
      };
    }

    case CHANGE_POST_TITLE: {
      return {
        ...state,
        newPost: {
          ...state.newPost,
          postTitle: payload.value,
        },
      };
    }

    case CHANGE_IS_FETCHING: {
      return {
        ...state,
        newPost: {
          ...state.newPost,
          isFetching: payload.value,
        },
      };
    }

    default:
      return state;
  }
};

export default filesReducer;

const SET_SELECTED_FILES = "SET_SELECTED_FILES";
const CHANGE_POST_TITLE = "CHANGE_POST_TITLE";
const CHANGE_IS_FETCHING = "CHANGE_IS_FETCHING";
const ADD_POST = "ADD_POST";

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

export const addPost = () => (dispatch, getState) => {
  const { selectedFiles, postTitle } = getState().files.newPost;
  const uid = getState().auth.profile.uid;

  PostAPI.addPost(postTitle, selectedFiles, uid, (err) => {
    debugger;
  });
};

