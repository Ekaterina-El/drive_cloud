export const initState = {
  profile: {
    uid: null,
    login: null,
    email: null,
    posts: [],
  },

  isAppFetching: true,
};

export const SET_USER_PROFILE = "AUTH_SET_USER_PROFILE";
export const SET_IS_APP_FETCHING = "AUTH_SET_IS_APP_FETCHING";
