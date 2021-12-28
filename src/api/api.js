import { getUsers, signUp, signIn } from "../db/db";
import { randomBetween } from "../utils/functions";

export const AuthAPI = {
  authProfile() {
    getUsers();
    const profile = {
      uid: "ru_123",
      email: "hackerrussia@yandex.ru",
      login: "ELKA",
    };

    // const isAuthed = randomBetween(0, 1);
    const isAuthed = false;
    return isAuthed ? profile : null;
  },

  signInUser(email, password, onSuccess, onError) {
    
    return signIn(email, password)
      .then((user) => {
        onSuccess(user);
      })
      .catch((err) => onError(err.message));
  },

  signUpUser(profile, password) {
    return signUp(profile, password);
  },
};
