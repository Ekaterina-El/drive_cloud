import { setError, setFetching } from "./actionCreators";
import { setUserProfile } from "../authReducer";
import { validate } from "./const";
import AuthAPI from "../../api/AuthAPI";

export const signUpUser = () => (dispatch, getState) => {
  const { name, email, password, repPass } = getState().signUp;

  const error = validate(name, email, password, repPass);
  if (error !== "") {
    dispatch(setError(error));
    return;
  }

  dispatch(setFetching(true));

  const profile = {
    email,
    name,
    uid: null,
  };

  AuthAPI.signUpUser(profile, password).then((profile) => {
    dispatch(setUserProfile(profile));
    dispatch(setFetching(false));
  });
};
