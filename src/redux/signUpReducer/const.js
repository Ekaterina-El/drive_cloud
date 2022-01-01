export const initState = {
  name: "",
  email: "",
  password: "",
  repPass: "",
  isFetching: false,
  error: "",
};

export const CHANGE_NAME = "SIGN_UP_CHANGE_NAME";
export const CHANGE_EMAIL = "SIGN_UP_CHANGE_EMAIL";
export const CHANGE_PASSWORD = "SIGN_UP_CHANGE_PASSWORD";
export const CHANGE_REP_PASS = "SIGN_UP_CHANGE_REP_PASS";
export const SET_FETCHING = "SIGN_UP_SET_FETCHING";
export const SET_ERROR = "SIGN_UP_SET_ERROR";

export const validate = (name, email, password, repPass) => {
  let error = "";

  if (name.length < 3) {
    error = "Длина имени должна быть больше 3";
  } else if (email.length < 5) {
    error = "Невалидная почта";
  } else if (password.length < 8) {
    error = "Длина пароля должна быть больше-равна 8";
  } else if (password !== repPass) {
    error = "Пароли не совпадают";
  }

  return error;
};
