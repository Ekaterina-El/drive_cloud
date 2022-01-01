import { setFetching } from "./actionCreators";
import { setUserProfile } from "../authReducer/";
import AuthAPI from "../../api/AuthAPI";

export const loginUser = () => (dispatch, getState) => {
  const { email, password } = getState().login;
  dispatch(setFetching(true));

  AuthAPI.signInUser(
    email,
    password,
    (profile) => {
      dispatch(setUserProfile(profile));
      dispatch(setFetching(false));
    },
    (error) => {
      alert(error);
      dispatch(setFetching(false));
    }
  );
};
