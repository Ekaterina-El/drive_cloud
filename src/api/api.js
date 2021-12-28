import { randomBetween } from "../utils/functions";

export const AuthAPI = {
  authProfile() {
    const profile = {
      uid: "ru_123",
      email: "hackerrussia@yandex.ru",
      login: "ELKA"
    }

    const isAuthed = randomBetween(0, 1);
    return isAuthed ? profile : null
  },
};
