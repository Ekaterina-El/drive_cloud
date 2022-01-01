import { SET_USER_PROFILE, SET_IS_APP_FETCHING } from "./const.js";

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  payload: { profile },
});

export const setIsAppFetching = (status) => ({
  type: SET_IS_APP_FETCHING,
  payload: { status },
});
