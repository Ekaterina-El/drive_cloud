import React from "react";
import { NavLink } from "react-router-dom";

const Login = ({email, password, changeEmail, changePassword, loginUser, isFetching}) => {
  const handleChangeEmail = e => changeEmail(e.target.value)
  const handleChangePassword = e => changePassword(e.target.value)

  return (
    <div>
      <input type="text" value={email} onChange={handleChangeEmail}/>
      <input type="password" value={password} onChange={handleChangePassword} />
      <button onClick={loginUser} disabled={isFetching}>Войти</button>
      <NavLink to={"/signup"}>У меня нет аккаунта</NavLink>
    </div>
  );
};

export default Login;
