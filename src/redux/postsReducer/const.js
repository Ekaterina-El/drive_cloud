export const initState = {
  newPost: {
    selectedFiles: [],
    postTitle: "",
    isFetching: false,
  },

  currentPostData: {
    postId: null,
    uid: null, 
    title: null,
    createdAt: null,
    files: []
  }
};

export const SET_SELECTED_FILES = "SET_SELECTED_FILES";
export const CHANGE_POST_TITLE = "CHANGE_POST_TITLE";
export const CHANGE_IS_FETCHING = "CHANGE_IS_FETCHING";
export const ADD_POST = "ADD_POST";
export const SET_CURRENT_POST_DATA = "SET_CURRENT_POST_DATA" 
export const SET_CURRENT_POST_FILES = "SET_CURRENT_POST_FILES"
