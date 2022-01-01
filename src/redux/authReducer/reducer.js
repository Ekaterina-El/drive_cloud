import { initState, SET_IS_APP_FETCHING, SET_USER_PROFILE } from "./const";

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_USER_PROFILE: {
      const newState = {
        ...state,
        profile: payload.profile,
      };
      return newState;
    }

    case SET_IS_APP_FETCHING: {
      return {
        ...state,
        isAppFetching: payload.status,
      };
    }

    default:
      return state;
  }
};
