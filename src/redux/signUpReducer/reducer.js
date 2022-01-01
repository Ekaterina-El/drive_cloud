import {
  initState,
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_REP_PASS,
  SET_FETCHING,
  SET_ERROR,
} from "./const";

export const signUpReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: payload.value,
      };

    case CHANGE_EMAIL:
      return {
        ...state,
        email: payload.value,
      };

    case CHANGE_PASSWORD:
      return {
        ...state,
        password: payload.value,
      };

    case CHANGE_REP_PASS:
      return {
        ...state,
        repPass: payload.value,
      };

    case SET_FETCHING:
      return {
        ...state,
        isFetching: payload.status,
      };

    case SET_ERROR: {
      debugger;
      return {
        ...state,
        error: payload.error,
      };
    }

    default:
      return state;
  }
};
