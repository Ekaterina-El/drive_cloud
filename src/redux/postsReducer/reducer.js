import {} from "./const";
import {
  initState,
  SET_SELECTED_FILES,
  CHANGE_POST_TITLE,
  CHANGE_IS_FETCHING,
} from "./const.js";

export const postsReducer = (state = initState, { type, payload }) => {
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
