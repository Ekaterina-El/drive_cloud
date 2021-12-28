import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = ({email, password, repeatPass, changeEmail, changePassword, changeRepeatPass, signUpUser, isFetching}) => {
  const handleChangeEmail = e => changeEmail(e.target.value)
  const handleChangePassword = e => changePassword(e.target.value)
  const handleChangeRepPass = e => changeRepeatPass(e.target.value)

  return (
    <div>
      <input type="text" value={email} onChange={handleChangeEmail}/>
      <input type="password" value={password} onChange={handleChangePassword} />
      <input type="password" value={repeatPass} onChange={handleChangeRepPass} />
      <button onClick={signUpUser} disabled={isFetching}>Войти</button>
      <NavLink to={"/login"}>У меня уже есть аккаунт</NavLink>
    </div>
  );
};

export default SignUp;
