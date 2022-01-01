import { setIsAppFetching, setUserProfile } from "./actionCreators";
import AuthAPI from "../../api/AuthAPI";

export const authMe = () => (dispatch) => {
  dispatch(setIsAppFetching(true));
  const profile = AuthAPI.authProfile();
  if (profile != null) {
    dispatch(setUserProfile(profile));
  }
  dispatch(setIsAppFetching(false));
};
