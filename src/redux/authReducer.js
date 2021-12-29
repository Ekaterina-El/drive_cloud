import { AuthAPI } from "../api/api";

const initState = {
  profile: {
    uid: null,
    login: null,
    email: null,
  },

  isAppFetching: true
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_USER_PROFILE: {
      const newState =  {
        ...state,
        profile: payload.profile,
      };
      return newState
    }

    case SET_IS_APP_FETCHING: {
      return {
        ...state,
        isAppFetching: payload.status
      }
    }

    default:
      return state;
  }
};

export default authReducer;


const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_IS_APP_FETCHING = " SET_IS_APP_FETCHING";

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  payload: { profile },
});

export const setIsAppFetching = (status) => ({
  type: SET_IS_APP_FETCHING,
  payload: {
    status,
  },
});

export const authMe = () => (dispatch) => {
  dispatch(setIsAppFetching(true));
  const profile = AuthAPI.authProfile();
  setTimeout(() => {
    if (profile != null) {
      dispatch(setUserProfile(profile));
    }
    dispatch(setIsAppFetching(false));
  }, 2000);
};

