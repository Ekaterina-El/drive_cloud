import React from "react";
import { NavLink } from "react-router-dom";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import s from "./SignUp.module.css";

const SignUp = ({
  name,
  email,
  password,
  repeatPass,
  changeName,
  changeEmail,
  changePassword,
  changeRepPass,
  signUpUser,
  isFetching,
  error,
  clearError,
}) => {
  debugger;
  const handleChangeName = (e) => changeName(e.target.value);
  const handleChangeEmail = (e) => changeEmail(e.target.value);
  const handleChangePassword = (e) => changePassword(e.target.value);
  const handleChangeRepPass = (e) => changeRepPass(e.target.value);

  return (
    <>
      {error !== "" && <ErrorBlock error={error} clearError={clearError} />}

      <div className={s.wrapper}>
        <div className={s.header}>
          <h1>Вы находитесь на сайте Portfolive</h1>
          <h2>Для продолжения пройдите регистрацию</h2>
        </div>

        <div className={s.form}>
          <input
            className={s.mb2}
            type="text"
            placeholder="Имя"
            value={name}
            onChange={handleChangeName}
          />
          <input
            className={s.mb2}
            type="email"
            onChange={handleChangeEmail}
            placeholder="Email"
            value={email}
          />
          <input
            className={s.mb2}
            type="password"
            placeholder="Пароль"
            onChange={handleChangePassword}
            value={password}
          />
          <input
            type="password"
            placeholder="Повторите пароль"
            onChange={handleChangeRepPass}
            value={repeatPass}
          />
        </div>

        <button
          className={s.authBtn}
          onClick={signUpUser}
          disabled={isFetching}
        >
          Зарегистрироваться
        </button>
        <NavLink to="/login">У меня есть аккунт</NavLink>
      </div>
    </>
  );
};

export default SignUp;
