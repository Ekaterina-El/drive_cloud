import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Login.module.css";

const Login = ({
  email,
  password,
  changeEmail,
  changePassword,
  loginUser,
  isFetching,
}) => {
  const handleChangeEmail = (e) => changeEmail(e.target.value);
  const handleChangePassword = (e) => changePassword(e.target.value);

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <h1>Вы находитесь на сайте Portfolive</h1>
        <h2>Для продолжения пройдите авторизацию</h2>
      </div>

      <div className={s.form}>
        <input
          className={s.mb1}
          value={email}
          onChange={handleChangeEmail}
          type="email"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
          placeholder="Пароль"
        />
      </div>

      <button className={s.authBtn} onClick={loginUser} disabled={isFetching}>
        Войти
      </button>
      <NavLink to="/signUp">У меня нет аккунта</NavLink>
    </div>
  );
};

export default Login;
