import {initState, CHANGE_EMAIL, CHANGE_PASSWORD, SET_FETCHING } from './const'

export const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
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

    case SET_FETCHING:
      return {
        ...state,
        isFetching: payload.status,
      };

    default:
      return state;
  }
};